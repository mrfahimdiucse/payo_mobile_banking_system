document.getElementById('login-btn').addEventListener('click', function(event){
    event.preventDefault();
    const accounNumber=document.getElementById('account-number').value;
    // console.log(accounNumber);
    const pinNum=document.getElementById('pin').value;
    // console.log(pinNum);
    if(accounNumber.length===11){
        if(pinNum==='1234'){
            window.location.href="/main.html"
        }
        else{
            alert("Incorrect Password");
        }
    }
    else{
        alert("Please Enter Valid Account Number");
    }
})