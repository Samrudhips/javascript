let goToMovie=(success,failure)=>{
    let bal=1500;
    if(bal>500){
        success("Go and Enjoy")
    }
    else{
        failure("Go to pg and sleep")
    }
}
goToMovie((msg)=>{console.log(msg);},(err)=>{console.log(err);})