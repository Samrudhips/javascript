function validateForm(){
    // alert('GM')
    let email=document.getElementById('email').value
    if(email===''){
        // alert("pls enter email id")
        document.getElementById('em').innerHTML="Please enter email Id"
    }
    else{
        alert(email)
    }
    return false;
}