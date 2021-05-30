
// var a={
//     x:1,y:2,
//     y:{
//         h:1,
//         s:function(){
//             console.log(this.x);
//         }
//     }
// }

// x1=a.y.s()
// console.log(x1);




// var data={
//     a:1,
//     b:2,
//     fn:function(){
//         console.log(this);
//     }
// }

// fn1=data.fn;
// var result={a:2,b:3};
// fn1.call(result);
// fn1.apply(result);



// var a=15;
// console.log(this.a);


// var a=2;
// function fun1(){
//     return this;
    
// }

// fun1();

// function fun1(){
//     return this;
    
// }

// fun1();


// var a = 2;
// var b = 3;

// var obj = {
//         a: 1,
//         b: 2,
//         childObj: {
//                 c: 3,

//                 add: function () {
//                         console.log(this.a + ' ' + this.b + ' ' + this.c);
//                 }
//         }
// };

// var sum = obj.childObj.add;
// sum();

// var data={
//     fn:"manish",
   
//     ln:"cccccccccc",
//     f:function(){
//         console.log(this);
//     }
// }

// data.f();

// obj={
//     a:"a",
// }

// obj.s="10";
// console.log(obj);
                
// var data=function(firstName,lastName){
//     console.log(this);
//     this.firstName=firstName;
//     this.lastName=lastName;
//     console.log(this);
//     this.fullname=function(){
//         return this.firstName+ " " +this.lastName;
//     }
// }

// var obj=new data("vishal","yadav");
//  console.log(obj.fullname());


//call method
 
// to access the from another context or objects
var obj={
    fn:"varun",

}

var greeting=function(a,b,c){

    return "welcome "+this.fn + " to "+a+" "+b+ " "+c;
}

// var res=greeting.call(obj,"a1","b1","c1");
// console.log(res);

// apply
// var args=["a1","b1","c1"];
// var res=greeting.apply(obj,args);
// console.log(res);

// var bound=greeting.bind(obj);
//  console.log(bound("a1","b2","c3"));



var object={
    // a:"manish",
    // b:"chauhan",
    // c:"jasbj"
};

var obj = {
        a: 1,
        b: 2,
        childObj: {
                c: 3,

                add: function () {
                    console.log(this);
                        console.log(this.a + ' ' + this.b + ' ' + this.c);
                }
        }
};

var sum = obj.childObj.add.bind(object);
sum();
