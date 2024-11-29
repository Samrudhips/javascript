let emp={
    eid:101,
    esal:1000000,
    ename:"Rahul",
    email:'rahul1@gmail.com'
}
let details={
    email:'rahul1@gmail.com',
    loc:"delhi"
}

let new_data={...emp,...details}
console.log(new_data);//duplicates are not allowed in objects
