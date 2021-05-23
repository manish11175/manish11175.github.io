var ticketLine=["Ram","tom","child","Jerry","Mohit"];
var a=ticketLine.shift();
console.log(a);
console.log(ticketLine[0]);
console.log(ticketLine);


var c=ticketLine.unshift("Manish");
console.log("unshift >",c,ticketLine);

var d=ticketLine.pop();
console.log("pop ",d,ticketLine);

// var e=ticketLine.indexOf("Jerry");
// var f=ticketLine.splice(e,1);
// console.log(f);
console.log(ticketLine);



var arr1=ticketLine.slice(2);
console.log(arr1);
console.log(ticketLine);


myname="Manish Chauhan";
var h=myname.split(" ");
var i=h.join(",");
console.log(h,i);

// 1 way create object
// const bioData={
//     firstName:"Manish",
//     lastName:"chauhan",
//     dob:25,
//     fullName:function(){
//         return this.firstName+" "+this.lastName;
//     }
// };

// console.log(bioData);

// console.log(bioData.fullName());

// bioData.sex="male";
// console.log(bioData);

//2 way create object

// function myData(firtsName,lastName){
//     this.firstName=firtsName;
//     this.lastName=lastName;
//     this.fullName=function(){
//         return this.firstName+" "+this.lastName;
//     }
// };
// var manish=new myData("manish","chauhan");
// console.log(manish.firstName,manish.lastName);


//3rd ways create object
// function add(){
//     console.log("addition");

// }

// add();

// // straction fuction using anonymous function

// var minus=function(){
//     console.log("subtract");
// }
// minus();

 // multiply function using iiFF 

// (function(){
//     console.log("multiply");
// })();

var colors=["red","blue","green","black","white"];

var firstColor=colors[0];
console.log(firstColor);
var thirdColor=colors[2];
console.log(thirdColor);

colors[4]="Ultra Violet";
console.log(colors);
