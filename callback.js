let arr=[1,2,3,4,5,6,7,8,9,10];
let sum=arr.reduce((accum=0,element)=>{
    return accum+element;
})
console.log(sum);

let newarr=arr.filter((e)=>{
    return e%2==0;
})
console.log(newarr);

let newArr2=arr.map((e)=>{
    return e*2;
})
console.log(newArr2)

arr.forEach((e,i)=>{
    console.log(`${i+1}. ${e}`);
})

let a=arr.every((e)=>{
    return e>5;
})
console.log(a)