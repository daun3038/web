const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const { MongoClient, ObjectID } = require('mongodb');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const multer = require('multer'); // multer 모듈 가져오기

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public")); // 정적 파일 제공 설정
app.use(bodyParser.json());
app.set('view engine', 'ejs');
app.use(cookieParser('yourSecretKey')); // 쿠키 파서 설정

// 이후 코드는 동일

app.use(session({
    secret: 'dafd0317',
    resave: false,
    saveUninitialized: true
}));

const url = 'mongodb+srv://daun2:dafd0317!%40@cluster0.pm37uxo.mongodb.net/myboard?retryWrites=true&w=majority';

let mydb;

MongoClient.connect(url)
    .then(client => {
        console.log("몽고DB 접속 성공");
        mydb = client.db('myboard');

        app.listen(8080, function () {
            console.log('포트 8080으로 서버 대기중 ...! ');
        });
    })
    .catch(error => console.error(error));

app.get('/', function (req, res) {
    if(req.session.user){
        console.log('세션 유지');
        res.render('index', {user: req.session.user });
    }else{
        console.log('user : null');
        res.render('index',{user: null});
    }
});

app.get('/list', function (req, res) {
    mydb.collection('post').find().toArray(function (err, result) {
        if (err) {
            console.error("게시글을 가져오는 중 오류가 발생했습니다:", err);
            res.status(500).send("게시글을 가져오는 중 오류가 발생했습니다.");
            return;
        }
        console.log("검색된 게시글:", result);
        res.render('list', { posts: result, currentPath: '/list', user: req.session.user });
    });
});

app.get('/enter', function (req, res) {
    res.render('enter', { user: req.session.user });
});

app.post('/save', function (req, res) {
    const postId = req.body.id;

    if (postId) {
        // 수정
        const objectId = new ObjectID(postId);
        mydb.collection('post').updateOne(
            { _id: objectId },
            { $set: { title: req.body.title, content: req.body.content, date: req.body.date } }
        )
        .then(result => {
            console.log('데이터 수정 성공');
            res.redirect('/list');
        })
        .catch(error => console.error(error));
    } else {
        // 새로 저장
        mydb.collection('post').insertOne({
            title: req.body.title,
            content: req.body.content,
            date: req.body.date
        })
        .then(result => {
            console.log('데이터 추가 성공');
            res.redirect('/list');
        })
        .catch(error => console.error(error));
    }
});

app.delete('/delete/:id', function(req, res) {
    const postId = req.params.id;
    const objectId = new ObjectID(postId);
    mydb.collection('post').deleteOne({ _id: objectId })
        .then(result => {
            console.log('게시글이 성공적으로 삭제되었습니다.');
            res.send('게시글이 성공적으로 삭제되었습니다.');
        })
        .catch(error => console.error('게시글 삭제 중 오류 발생:', error));
});

let objectId;

app.get('/content/:id', function(req, res) {
    const postId = req.params.id;

    // postId가 올바른 형식인지 확인
    if (!ObjectID.isValid(postId)) {
        res.status(400).send('잘못된 게시물 ID입니다.');
        return;
    }

    const objectId = new ObjectID(postId);

    mydb.collection('post').findOne({ _id: objectId })
        .then(result => {
            if (!result) {
                res.status(404).send('게시물을 찾을 수 없습니다.');
                return;
            }

            // 이미지 경로 처리
            let imagepath = result.path ? result.path.replace(/\\public\\image\\/,"/image/") : '/image/default.jpeg';

            // data 객체를 생성하여 전달
            const data = {
                path: imagepath,
                // 다른 필요한 데이터 추가
            };
            res.render('content', { post: result, currentPath: '/content', user: req.session.user, data });
        })
        .catch(error => {
            console.error('게시물 조회 중 오류 발생:', error);
            res.status(500).send('서버 오류가 발생했습니다.');
        });
});



app.get('/edit/:id', function(req, res) {
    const postId = req.params.id;
    const objectId = new ObjectID(postId);

    mydb.collection('post').findOne({ _id: objectId })
        .then(result => {
            if (!result) {
                res.status(404).send('게시물을 찾을 수 없습니다.');
                return;
            }
            // 게시물 정보를 받아온 후에는 해당 정보를 edit 페이지로 렌더링합니다.
            res.render('edit', { data: result });
        })
        .catch(error => {
            console.error('게시물 조회 중 오류 발생:', error);
            res.status(500).send('서버 오류가 발생했습니다.');
        });
});



app.get('/cookie',function(req,res){
    let milk = parseInt(req.signedCookies.milk) + 1000;
    if(isNaN(milk)){
        milk = 0;
    }
    res.cookie('milk',milk,{signed:true});
    res.send('product : ' + milk + '원');
});

app.get('/session', function(req, res) {
    // 세션에서 데이터 가져오기
    const sessionData = req.session;

    // 세션에 데이터가 있는지 확인
    if (sessionData.views) {
        sessionData.views++;
        res.send('You have visited this page ' + sessionData.views + ' times');
    } else {
        sessionData.views = 1;
        res.send('Welcome to this page for the first time!');
    }
});

app.get("/login",function(req,res){
    console.log(req.session);
    if(req.session.user){
        console.log('세션 유지');
        res.redirect('/');
    }else{
        res.render("login");
    }
});

app.post("/login",function(req,res){
    console.log("아이디 : " + req.body.userid);
    console.log("비밀번호 : " + req.body.userpw);

    mydb
        .collection('account')
        .findOne({userid:req.body.userid})
        .then((result)=>{
            if(result && result.userpw == req.body.userpw){
                req.session.user = { userid: req.body.userid }; // 세션에 유저 정보를 저장
                console.log('새로운 로그인');
                res.redirect('/');
            }else{
                res.send('비밀번호가 틀렸습니다.');
            }
        })
        .catch(error => {
            console.error('로그인 처리 중 오류 발생:', error);
            res.status(500).send('서버 오류가 발생했습니다.');
        });      
});

app.get('/logout',function(req,res){
    console.log('로그아웃');
    req.session.destroy((err) => {
        if (err) {
            console.error('로그아웃 중 오류 발생:', err);
            res.status(500).send('서버 오류가 발생했습니다.');
        } else {
            res.redirect('/'); // 로그아웃 후 홈 화면으로 리디렉션
        }
    });
});

app.get('/signup', function(req, res){
    res.render('signup');
});

app.post('/signup', (req, res) => {
    const { userid, userpw, affiliation, email } = req.body;
    const newUser = {
        userid,
        userpw,
        affiliation,
        email
    };

    mydb.collection('account').insertOne(newUser)
        .then(result => {
            console.log('회원가입 성공');
            res.redirect('/login');
        })
        .catch(error => {
            console.error('회원가입 중 오류 발생:', error);
            res.status(500).send('서버 오류가 발생했습니다.');
        });
});

const fs = require('fs');

// 이미지 파일 저장 디렉토리 생성
const uploadDir = './public/image';
if (!fs.existsSync(uploadDir)) {
    fs.mkdirSync(uploadDir);
}

const storage = multer.diskStorage({
    destination: function (req, file, done) {
        done(null, uploadDir);
    },
    filename: function (req, file, done) {
        const ext = file.mimetype.split('/')[1];
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
        const filename = `${file.fieldname}-${uniqueSuffix}.${ext}`;
        done(null, filename);
    }
});
let imagepath = '/image/default.jpeg';
const upload = multer({ storage: storage });

app.post('/photo', upload.single('picture'), function (req, res) {
    if (!req.file) {
        res.status(400).send('No file uploaded.');
        return;
    }

    const photoData = {
        filename: req.file.filename,
        contentType: req.file.mimetype,
        path: imagepath
    };

    const filePath = '₩₩' + req.file.path;
    if (filePath !== imagepath) {
        imagepath = filePath;
    }

    mydb
        .collection('photos').insertOne(photoData)
        .then(result => {
            console.log('Photo uploaded and saved to database');
            res.send('File uploaded successfully!');
        })
        .catch(error => {
            console.error('Error saving photo to database:', error);
            res.status(500).send('Error saving photo to database');
        });
});

app.get('/search', function(req, res) {
    const searchValue = req.query.value;
    console.log('검색어:', searchValue);

    // 검색어가 있는지 확인
    if (!searchValue) {
        res.status(400).send('검색어를 입력하세요.');
        return;
    }

    // MongoDB 쿼리를 사용하여 제목에 검색어가 포함된 게시물 찾기
    mydb.collection('post')
        .find({ title:req.query.value }).toArray(function(err, result) {
        if (err) {
            console.error('검색 중 오류 발생:', err);
            res.status(500).send('검색 중 오류가 발생했습니다.');
            return;
        }
        console.log('검색 결과:', result);
        res.render('list', { posts: result, currentPath: '/search', user: req.session.user });
    });
});
