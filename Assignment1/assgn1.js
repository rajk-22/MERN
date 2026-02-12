const form = document.getElementById("update");

form.addEventListener("submit",function(event){
    event.preventDefault();

    const newPassword = document.getElementById("newPassword").value;
    const confirmPassword = document.getElementById("confirmPassword").value;
    const message = document.getElementById("message");

    newPassMsg.textContent="";
    confirmPassMsg.textContent="";

    if(newPassword===""){
        newPassMsg.textContent="Required*";
    }
    if(newPassword!==""&& confirmPassword!=="" && newPassword!==confirmPassword){
        confirmPassMsg.textContent="Password must be same";
    }
    if(newPassword!=="" && confirmPassword!=="" && newPassword===confirmPassword){
        confirmPassMsg.style.color="green";
        confirmPassMsg.textContent="Password updated successfully";
    }
});