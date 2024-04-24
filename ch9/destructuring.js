// const color = ['red', 'green','blue'];

// let r = color[0];
// let g = color[1];
// let b = color[2];

// let [r,g,b] = color;

// console.log(r);
// console.log(g);
// console.log(b);

// let user = {
//     id : 'jamsuham',
//     pw : '1111',
//     name : '잠수함',
//     age : '21',
// };

// let id = user.id;
// let pw = user.pw;
// let name = user.name;
// let age = user.age;

// let{id,pw,name,age} = user;

// console.log(id);
// console.log(user.id);



// let{id,pw,name,age} = {id : 'jamsuham', pw : '1111',name : '잠수홤',age : 21};

// console.log(id);
// console.log(pw);
// console.log(name);
// console.log(age)


// let user ={
//     name : 'jam',
//     age : 21,
// };

// let {id ='guest',pw = '1234',name,age} = user;

// console.log(id);
// console.log(pw);
// console.log(name);
// console.log(age);


let user={
    id : 'jamsuham',
    pw : '1111',
    name : '잠수함',
}

let {id,...rest} = user;

console.log(id);
console.log(rest.pw);
console.log(rest.name);