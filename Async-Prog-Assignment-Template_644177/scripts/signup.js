document.getElementById("form").addEventListener("submit", myFunction)

function myFunction(event){
    event.preventDefault()
    let name = document.getElementById("name").value;
    let contact = document.getElementById("contact").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    
    function constructor(n,c,e,p){
    
    this.name = name;
    this.contact = contact;
    this.email = email;
    this.password = password;
   }
   
  let cons = new constructor(name,contact,email,password);
//   console.log(cons) 

  let signupArr = JSON.parse(localStorage.getItem("prayash")) || [];
  

  signupArr.push(cons)
  

  localStorage.setItem("prayash",JSON.stringify(signupArr));

  
  
  window.location.href="./login.html";

  

}


