class Account{//creating class
    acc_Id=101;//property
    open_Account(){//1st method
        console.log("Account opened successfully");
        
    }
    deposit_Account(){//2nd method
        console.log("Amount deposited successfully");
        
    }

}
let a1=new Account();//creating object using new keyword
//to access class members using object
console.log(a1);
console.log(a1.acc_Id);//accessing property
a1.open_Account();//accessing method with parenthesis
a1.deposit_Account();

