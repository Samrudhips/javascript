let state={
    emp:{ eid:101,
        ename:"Rahul",
        email:"rahul@gmail.com"},
        product:{
            p_name:"Samsung"
        },
        count:100,
        users:[]
}
//object destructuring improves code readability
let {count}=state
console.log(count);
