//for-of loop
// let enames=["Rahul","Sonia","Maria","Meenal"]
// for(ename of enames){
//     console.log(ename);
    
// }
// let eids=[101,102,103,104,105];
// for(eid of eids){
//     console.log(eid);  
// }
// console.log(eids.length);//to find array length
let emp={
    eid:101,//cant give same id name but values can be same
    ename:"manasa",
    esal:100000
}
for(employee in emp){
    console.log(employee);
    
}