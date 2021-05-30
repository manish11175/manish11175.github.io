//return a number

// function fun1(x,y){

//     return x+y;
// }






// var ans=fun1(1,2);
// console.log(ans);


// var sum=(a,b)=>a+b;
// var s=sum(2,3);
// console.log(s);


// const str=()=>"This is manish";
// console.log(str());

// const arr=['a','b','c'];

// const arr1=arr;// it will not copy the list it pass the reference of arr so both list will modify
// arr1[0]='d';
// console.log("1. ",arr,arr1);

//a,b,c // a b c

// const arrcopy=arr.slice(0);

// arrcopy[0]="Manish";
// console.log("2. ",arr,arrcopy);

// const arrcopy1=[...arr];
// arrcopy1[0]="chauhan";
// console.log("3. ",arr,arrcopy1);



//Map function

// arr is non primitive data so it pass the refernace if it modified then original data are also changed


// const doublemap1=(numbers)=>{
//    
//     for(let i=0;i<numbers.length;i++){
//      numbers[i]=numbers[i]*2;
//     }
//     return numbers;
// }
// const data=[1,2,3,4];
// console.log("originals data",data);//1234 
// console.log("muttet data",doublemap1(data));//2 4 6 8
// console.log("mutteted data",data); //2 4 6 8



// const doublemap=(numbers)=>{
//     const double=[];
//     for(let i=0;i<numbers.length;i++){
//     double.push(numbers[i]*3);
//     }
//     return double;
// }
// const data=[1,2,5,7,3,4];
// console.log(doublemap(data));

// const double=(numbers)=>{
//     return numbers.map((item,i)=>{
//         return item*2;
//     })
    
// const double=(numbers)=>{
//       return numbers.map((items,index)=>{
//         return items*2;
//         })
    
// };
    

// const data1=[1,2,34,90,5,11];

// console.log(double(data1));
// console.log(data1);





// const filter=(argu)=>{
//     return argu.filter((item)=>{
//         if(item%2==1){
//             return true;
//         }
//     })
// };

// console.log(filter(data));





// var data=[1,23,3,4,3,4,5,6,8,6];



// console.log(data1);

// const filterData=(data)=>{
//     return data.filter((item)=>{
//         if(item%2===0){
//             // return true;
//             return item;
//         }
//     })
// }

// console.log(filterData(data));

// var data=[1,23,3,4,3,4,5,6,8,6];
// const findData=(data)=>{
//     return data.find((item,i)=>{
//         if(item===4){
//             // return true;
//             return true;
//         }
//     })
// }

// console.log(findData(data));

var numbers=[1,2,3,4];  

const summation=(numbers)=>{
    return numbers.reduce((accum,item)=>{
        return accum+item;
    },0);
}

const newArray=(numbers)=>{
    return numbers.reduce((accum,item)=>{
        accum.push(item*5);
        return accum;
    },[]);
}

// var res=summation(numbers);
// console.log(res);

var res=newArray(numbers);
console.log(res);
// const summation1=(numbers)=>numbers.reduce((accum,item)=> accum+item,0);


// // // console.log(summation1(numbers));

// var user=[
//     {
//         name:"manish",
//         age:56,

//     },
//     {
//         name:"chauhan",
//     },
//     {
//         name:"riya",
//     }
// ]

// const reduceName=(user)=>user.reduce((accum,item)=>{
//     accum.push(item.age);
//     return accum;
// },[]);


// console.log(reduceName(user));


// const x={
//     val:2,
// };
// const x1=()=>x.val+=1;     //output  is 3     it will muttet the const x to 3
// const x2=()=>x.val*=2;     // output is 6    3*2

// console.log(x1());

// console.log(x2());  //x2 is modified due x1 this is side effect of x1


// composition of function

//  const function1=(x)=>x+2;
//  const function2=(x)=>x*x;

// const composition=(fn1,fn2)=>(value)=>fn2(fn1(value)*2); //3+2=>5*2=>10=>10*10=>100;

// console.log(composition(function1,function2)(3));

//closure


// const fun1=(a)=>{
    
//     return (b)=>{
      
//        return (c)=>{
           
//            return a+b+c;
//        }
       
//     }
   
// }
// console.log(fun1(1)(2)(3));


const closure=(a)=>{
    return function(b){
        return function(c){
            return a*b*c;
        }
    }
}
console.log(closure(12)(12)(12));