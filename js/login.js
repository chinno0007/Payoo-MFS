document.getElementById("login-btn").addEventListener('click', function(event){
    event.preventDefault();
    // get the mobile number
    const getThePhoneNumber = document.getElementById('get-phone-number').value;
    // get the pin number 
    const getThePinNumber = document.getElementById('get-pin-number').value;
    if(getThePhoneNumber === '5' && getThePinNumber === "123"){
        console.log("You are logged in.");
        // Alow the user to have the experience 
        window.location.href = "/home.html";
    }
    else{
        alert("Enter the actual phone number or pin number.");
    }
});