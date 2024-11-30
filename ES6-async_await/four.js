let sum=(a,b)=>{
    return a+b
}
let mul=(a,b)=>{
    return a*b
}
let calc=(a,b,callback)=>{//callback is a function
    return callback(a,b)//invoking a function
}
let r1=calc(10,20,sum)
let r2=calc(10,20,mul)
console.log(r1);
console.log(r2);


