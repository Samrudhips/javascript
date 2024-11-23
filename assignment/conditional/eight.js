// Write a program to print the given 3 numbers in ascending orders?

let num1 = 150;
let num2 = 100;
let num3 = 250;
let smallest,middle,largest

if(num1<=num2 && num1<=num3) {
 smallest=num1
if(num2<=num3){
    middle=num2
    largest=num3

}else{
    middle=num3
    largest=num2
}
}else if(num2<=num1 && num2<=num3) {
    smallest=num2
   if(num1<=num3){
       middle=num1
       largest=num3
   
   }else{
       middle=num3
       largest=num1
   }
   }else{
    smallest=num3
    if(num1<=num2){
        middle=num1
        largest=num2
    }else{
        middle=num2
        largest=num1
    }
   }
   console.log( "The number in the ascending order is:", smallest, middle, largest);
    