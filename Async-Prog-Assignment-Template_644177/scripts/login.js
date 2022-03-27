let signupArr = JSON.parse(localStorage.getItem("prayash"))

var form=document.querySelector("#form").
addEventListener("submit",loginfunction)

function loginfunction(event){
    event.preventDefault()

   let email=document.querySelector("#email").value;
   let  password=document.querySelector("#password").value;
   let flag = false;

   for(let i=0; i<signupArr.length; i++){
    if(signupArr[i].password==password && signupArr[i].email==email){
        flag = true;
        break;
    }
    
}
if(flag==1){
    alert("login successfull")
}
else{
    alert("login failed")
}

}





