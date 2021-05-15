// (function () {
//     "use strict";
//     warmUp();
//     function warmUp() {
        
//         console.log(x);
//         console.log(foo());

//         var x = "variable hosting!";

//         function foo() {
//             return "function hoisting";
//         }
//     }
   
// })();


// function today(){
//     var d = new Date("April 4, 2021");
//     //console.log(d.getDate());
//     var t=new Date();
//     console.log(t);
//     console.log(t==d);
// }

// today();

function test () {
 "use strict"
 var pizza={
    //  sauce:false,
    //  saucetype:"",
    //  protein:"",
    //  orderNow:false,

     pizzaMkr:function pizzaMade() {
         if(pizza.orderNow==true){
            return "we are making your pizza with "+(pizza.sauce?pizza.saucetype+" and ":"")+" "+pizza.protein+" pick up in 20 min";
         }
         else{
             return "currentlt we are offline";
         }
         
     }
 }  
 pizza.sauce=true;
 pizza.saucetype="tomato";
 pizza.protein="chicken"; 
 pizza.orderNow=true;
 console.log(pizza.pizzaMkr());
}
test();

console.log(window);
