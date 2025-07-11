let arrNumber=[1,2,3,4,5,6,7,8,9,10];
let newArr=[];
arrNumber.map((e)=>{
    if (e%2==0){
      newArr.push(e);
    }
})
console.log(newArr);