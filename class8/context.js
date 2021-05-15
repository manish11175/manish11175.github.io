
// var a={
//     x:1,y:2,
//     y:{
//         h:1,
//         s:function(){
//             console.log(this.x);
//         }
//     }
// }

// x1=a.y.s
// console.log(x1);




var data={
    a:1,
    b:2,
    fn:function(){
        console.log(this);
    }
}

fn1=data.fn;
var result={a:2,b:3};
fn1.call(result);
fn1.apply(result);
