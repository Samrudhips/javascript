//To access class members within the class we need this keyword
class Account{
    acc_name="Rahul";
    acc_Bal=0;
    deposit_Amount(amount){
        console.log(amount)
        

    }

}
let a1=new Account();
console.log(a1);
console.log(a1.acc_name);
console.log(a1.acc_Bal);
a1.deposit_Amount(201);
a1.deposit_Amount(50);
