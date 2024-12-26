var x = document.getElementById("error");

function validate() {

    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("pass").value;
    var confirmPassword = document.getElementById("confirm-pass").value;
    x.classList.add('alert','alert-danger');
    x.style.transition = "all 0.5s ease";
  if (name == "" &&email == "" &&password == "" &&confirmPassword == "")
     {
    x.innerHTML = "please Insert Valid Data";
    return false;
  }
  else if (name==0 || name.length<5){
    x.innerHTML = "please Insert 5-15 character in username";
    return false;
  }
  else if (email.indexOf('@',3) == -1){
    x.innerHTML = "please Insert valid email";
    return false;
  }
  else if (password=="" || password.length<8){
   x.innerHTML="please Insert atleast 8 character in password";
   return false;
  }
  else if (confirmPassword =="" || confirmPassword != password){
    x.innerHTML="please Matched password";
   return false;
  }
  else {
    return true;
  }
  
}
