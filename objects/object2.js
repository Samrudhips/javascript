//create
let emp={
    eid:101,
    ename:"Rahul",
    esal:45000

}
//Read
console.log(emp)
console.log(emp.eid)
console.log(emp.ename)
console.log(emp.esal)
console.log(emp.eloc)

//update
emp.ename="Manasa"
emp.email="manasa123@gmail.com" //adds new data
console.log(emp)

//deleting using delete keyword
delete emp.email
console.log(emp)

