function validate() {

   var e=document.getElementById("email").value;
   if(e.indexOf('@')<=0){
       document.getElementById("message").innerHTML="Invalid @ position";
       return false;
   }
   if((e.charAt(e.length-4)!='.') && (e.charAt(e.length-3)!='.'))
   {
    document.getElementById("message").innerHTML="Invalid . position";
    return false;
   }
   
   var p1=document.getElementById("password").value;
   if(p1==""){
       document.getElementById("pass").innerHTML="Empty Password";
       return false;
   }
   if(p1.length<5){
    document.getElementById("pass").innerHTML="Password must be greater than 5 characters";
    return false;
   }
   if(p1.length>20){
    document.getElementById("pass").innerHTML="Password must not be greater than 20 characters";
    return false;
   }
   var p2=document.getElementById("passwords").value;
   if(p1!=p2){
    document.getElementById("pass-con").innerHTML="Password is not Same";
    return false;
   }
   var check=document.getElementById("agree").checked;
   if(check==""){
       alert("Please Accept Terms and Conditions");
       return false;
   }
    
  }

//   var btn=document.getElementById("submit");
//   var click=document.getElementByClassName('click')[0];
//   btn.disabled=true;

//   clickBtn.addEventListener('click', function(event) {
//     btn.disabled = !btn.disabled;
// });
// button.addEventListener('click', function(event) {
//     alert('Enabled!');
// });