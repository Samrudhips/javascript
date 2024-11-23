//create array
let a=[10,20,30,40]
//read array
console.log(a)
//read array elements using indexing
console.log(a[0])
console.log(a[1])
console.log(a[2])
console.log(a[3])
console.log(a[4])
//while trying to access array element using indexing-indexing not available we will get undefined
//update
a[0]=101
a[1]=102
console.log(a)
//delete
//using array methods
//delete keywords
// a.pop()//removes last element
// a.length=0//1.set length to zero
//a=[]//reassign to an empty array
//a.splice(0,a.length)//use splice method
while(a.length>0){
a.pop()
}
console.log(a)
