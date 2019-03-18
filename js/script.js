/*function validateform(){
 var pw=document.getElementById('pw').value;
 var cpw=document.getElementById('cpw').value;

 if(pw!=cpw){
       document.getElementById('pw').style.border = 'red';
document.getElementById('message').innerHTML = 'not matching';
 }
}*/
function checkPasswordMatch() {
    var password = $("#pw").val();
    var confirmPassword = $("#cpw").val();

    if (password != confirmPassword)
        $("#message").html("Passwords do not match!");
    else
        $("#message").html("Passwords match.");
}

function checkMobile() {
    var mo = $("#mobile").val();

    if (mo.length()!=10)
      $("#message").html("Invalid mobile number.");

}


$(document).ready(function () {
   $("#cpw").keyup(checkPasswordMatch);
   $("#mobile").keyup(checkMobile);

});
