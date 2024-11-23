//break?
//continue? skip the current iteration
// for(var i=1;i<=100;i++){
//     if(i==50)
//         break;
//     console.log(i);
    
// }
//print all values except 299
let prices=[9,99,199,299,399,499,599]
//skip the ccurrent iteration and exceute next one
let price;
for(price of prices){
    if(price===299)
        continue
    console.log(price);
}
//break vs continue
//break means stops the iteration and come out of the loop
//continue means skips the current iteration and executes the next one
