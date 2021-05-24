"use strict";


// const student={
//     firstName:"akash",
//     lastName:"bdjksf",
//     age:34,
// }

// console.log(student);
//1 copy
// const studentCopy={
//     rollno:1,
//     ...student,
//     //spread
//     branch:"cs",
// }

// console.log("spread copy",studentCopy);

//2. copy through object
// const student1=Object.assign({new:"new"},student);

// console.log("student 1",student1);

//3.Json
// console.log(JSON.stringify(student));
// const student2=JSON.parse(JSON.stringify(student));
// console.log(student2);


//window level scope
//   age=34

//loacl scope


//global
// var data=4;

// function fun1(){
//     var data=1;//new declration local scope
//    console.log(data);
// }
// fun1();
// console.log(data);



// if(true){
//     var name1="nama";
// }
// console.log(name1);
// var fun;
// fun();
//  fun=function(){
//     console.log("sadnkmnsadb");    
// }


// fun1();
// function fun1(){
//     console.log("normal function"); //funtion will huisted
// }

// var num=9;
// var funNum=function(){
//     //var num;
//     console.log("1",num);
//     var num=5;
//     console.log("2",num);
// }
// funNum();


// for(var i=0;i<10;i++){
//     console.log(i,"num");  //var i will huisted;
// }
// console.log("outer",i);


// for(let i=0;i<10;i++){
//     console.log(i,"num");
// }
// console.log("outer",i);
// let i=10;
// function fun3(){
//   console.log(i);
//   let i=9;
//   console.log(i);
// }

// fun3();

// age=12;
// console.log(age);
// const i;

// let i=9;

// function fun3(){
//   const i=9;
//   console.log(i);
// }


// fun3();

// let i;

// let i=10;//update only but not re declration
//  let i=9;

// var i=10;//both
// var i=5;

const i=6;

// const i=10;
// const i=5;
