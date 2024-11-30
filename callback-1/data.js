let employees=[
    {eid:101,ename:"Rahul",esal:45000},
    {eid:102,ename:"Sonia",esal:60000}
]
let createEmployee=(emp,callback)=>{
    setTimeout(()=>{
        employees.push(emp);
        callback()
    },4000)
}
let getEmployees=()=>{
    setTimeout(()=>{
       let rows="";
       employees.forEach((emp)=>{
        rows=rows+`
        <tr>
        <td>${emp.eid}</td>
             <td>${emp.ename}</td>
             <td>${emp.esal}</td>
             </tr>
        `
       })
       document.getElementById('abc').innerHTML=rows
    },1000)
}
createEmployee({eid:103,ename:"Priya",esal:65000},getEmployees)
getEmployees()