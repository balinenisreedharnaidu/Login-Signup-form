function ck(){
    txt="";
    ptags=document.querySelectorAll('p');
    for (let index = 0; index < 2; index++) {
        txt=txt+ptags[index].innerText;
    }
    if(txt.length===0){
        document.querySelector('form').reset();
        console.log("form sucess");
    }    
}


function setSuccess(num){
    document.querySelectorAll("p")[num].innerText="";
}

function setErr(msg,num){
    document.querySelectorAll("p")[num].innerText=msg;
    }



function goValid(){
    usertag=document.querySelectorAll("input")[0];
    pwdtag=document.querySelectorAll("input")[1];
    if(usertag.value===''){
        console.log("username is empty");
        setErr("Username should not be empty",0);
    }
    else if (usertag.value.length<=6&&usertag.value.length>0){
        console.log("username is less than 6 characters.");
        setErr("Username must be greater than 6 characters",0);
    }
    else if(usertag.value.length>6){
        setSuccess(0);
    }

    if(pwdtag.value===""){
        console.log("password is empty");
        setErr("password should not be empty",1);
    }
    else if(pwdtag.value.length<=6&&pwdtag.value.length>0){
        setErr("password must be greater than 6 characters",1);
        console.log("password is less than 6 characters.");
    }
    else if(pwdtag.value.length>6){
        setSuccess(1);
    }
}



document.querySelector('button').addEventListener("click",(e)=>{
    e.preventDefault();
    console.log("button clicked..");
    goValid();
    ck();
})
