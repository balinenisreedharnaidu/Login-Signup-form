//setErr funciton
function setErr(msg,i){
    console.log(msg);
    //txt=document.createTextNode(msg)
    document.querySelectorAll("p")[i].innerText=msg;
}

//function for email validation
function isValid(ml){
    var regex=new RegExp('^([0-9A-Ba-z.])+@([0-9A-Ba-z]){2,5}.([0-9A-Ba-z]){2,5}$');
    return regex.test(ml);
}

//govalid func for validation
function goValid(){
    fntag=document.querySelectorAll('input')[0];
    etag=document.querySelectorAll('input')[1];
    usertag=document.querySelectorAll('input')[2];
    pwdtag=document.querySelectorAll('input')[3];

    console.log(fntag.value);
    console.log(etag.value);
    console.log(usertag.value);
    console.log(pwdtag.value);

    //valid for first name
    if(fntag.value===""){
        console.log("first name is empty");
        setErr('Dear shree, Full name must not be empty.',0);
    }
    else if( fntag.value.length>0 && fntag.value.length<=6 ){
        console.log("first name is less than 6 chars");
        setErr('Dear shree, Full name must be greater than 6 characters.',0);
    }

    //valid for email address
    if(etag.value===""){
        console.log("Email  is not given...");
        setErr('Dear shree, Email should not be empty.',1);
    }

    else if(isValid(etag.value)){
        console.log("Email given is valid.Sucess...")
    }
    else{
        setErr("Dear shree! Given email is not valid",1);
        console.log("email is not valid");
    }

    //valid for username
    if(usertag.value===""){
        console.log("username is empty");
        setErr('Dear shree, username must not be empty.',2);
    }
    else if( usertag.value.length>0 && usertag.value.length<=6 ){
        console.log("username is less than 6 chars");
        setErr('Dear shree, username must be greater than 6 characters.',2);
    }
    

    //valid for password
    if(pwdtag.value===""){
        console.log("password is empty");
        setErr('Dear shree, password must not be empty.',3);
    }
    else if( pwdtag.value.length>0 && pwdtag.value.length<=6 ){
        console.log("password is less than 6 chars");
        setErr('Dear shree, password must be greater than 6 characters.',3);
    }



    
    
}

//event listener to the button
document.querySelector(".login-form").addEventListener("click",(e)=>{
    console.log("clicked !!!");
    goValid();
})
