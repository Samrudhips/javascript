let nums=[41,32,44,56,77,89,99]
//collect even number into new array
//using for loop
// let even_nums=[]
// for(let num of nums){
//     if(num%2===0){
//         even_nums.push(num)
//     }
// }
// console.log(even_nums);
//using while loop
// let i=0;
// while(i<=nums.length-1){
//     if(nums[i]%2===0){
//         even_nums.push(nums[i])
//     }
//     i++;
// }
// console.log(even_nums);

let even_nums=nums.filter((num)=>{
    return num%2===0
})
console.log((even_nums))
//using filter-using boolean value
