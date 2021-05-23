
// for(i=0;i<data.length;i++){
//     console.log("data",i," " ,data[i]);
// }

// var data1=data.join("->");
// console.log(data1);
// console.log(data);

// console.log(data.indexOf('mansi'));

// var data=[1,2,3,"mansi","as","a5"];
// data.splice(2,3,"a1","a2","a3","a4");
// console.log(data);
// aee 1 2 a1 a2 a3 a4 a5

// data.splice(0,0,"aee");
// console.log(data);
// //a1--a5
// data.splice(8,2,"s1","s2");
// console.log(data);
//aee a1 ----a5 s1 s2
//splice(start,deleteCount,item1,item2)

// var data=[1,2,3,3,1,6,7,8,92,3,4,244]
// data.sort(function(a,b){
//     return b-a;
// });


// console.log(data);

// var data=["apple","appel","show","mango"];
// console.log(data.sort());
// console.log(data.reverse());



// var color="red";


// var obj={
//      "id":1,
//      "fname":"manish",
//      "lname":"chuahan",
//      "age":12,
//      fullname:function(){
//          return this.fname+this.lname;
//      }
//     }
// var f=obj.fullname();
// console.log(f);

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


//object.create method 


// var functionName= function(){
//     console.log("ananymous funtion");
// }
// functionName();



// function NormalFuntion(){
//     console.log("function");
// }

// NormalFuntion();

// var functionName= ()=>{
//     console.log("ananymous funtion");
// }
// functionName();



//  multiply function using iiFF 

(function(){
    console.log("multiply");
}
)();

//hoisting
