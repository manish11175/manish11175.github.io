//closure
// function first(f){
//     return function(s){
//         return f+s;
//     }
// }

// var ans=first(2)(4);
// console.log(ans);


// var fun1=function(first){
//     var fun2=function(second){
//         var fun3=function(third){
//             return first+second+third;
//         }
//         return fun3;
//     }
//     return fun2;
// }


// var result=fun1("mani")("sh")("chuahan");
// console.log(result);




//context

// reference of objects in which it calling


// var User=function(name,age){
    
//        this.name=name,
//         this.age=age,
    
//     this.getProfile=function(){
//     console.log(this.name+" "+this.age);    
    
//     return ()=>{

//         console.log(this);
//     }
//     }

// }
// var user1=new User("manish",23);
// var p=user1.getProfile();
// p();


var Person=function(eatAction,afterEatAction){

    if(eatAction){
        this.sleepstatus=function(){
            console.log(afterEatAction);
        }
    }
    else{
        this.sleepstatus=function(){
            console.log();
        }
    }
}


var manish=new Person(false,"sleeping");

manish.sleepstatus();


var tony={
    food:"burger",
}
var thor={
    food:"beer"
}


var fav=function(eat,after){
    console.log(eat,after,this.food);
}

fav.call(thor,"star","fight");
fav.apply(tony,["bhukha","died"]);


var war=function(){
    console.log("fighting with thanos");
}

var infinitywar=war.bind(thor);
infinitywar();
