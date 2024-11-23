// using dom to update table body
let employees=[
    {eid:101,ename:"Rahul",esal:45000},
    {eid:102,ename:"Sonia",esal:55000},
    {eid:103,ename:"Modi",esal:40000},
    {eid:104,ename:"Priyanka",esal:30000}
];
function displayData(){
    // alert("Test case 123")
    let rows=""
    for(emp of employees){
        rows=rows+`<tr>
                    <td>${emp.eid}</td>
                    <td>${emp.ename}</td>
                    <td>${emp.esal}</td>
                    </tr>`;
    }
    document.getElementById("abc").innerHTML=rows
}