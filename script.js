document.addEventListener('DOMContentLoaded', function (){
})


const form = document.getElementById('registration-form');


const feedbackDiv = document.getElementById('form-feedback');

// form submission
form.addEventListener('submit', function (event){
    event.preventDefault()
})

// input Retrieval and Trimming
const username = document.getElementById('username').value.trim();
const email = document.getElementById('email').value.trim();
const password = document.getElementById('password').value.trim();
 
// Validation logic
let isValid = true;
const message = [];

if (username.length < 3) {
    isValid = false;
    messages.push('username must be at least 3 character long');
}

if (!email.includes('@') || !email.includes('.')) {
    isValid = false;
    messages.push("Email must contain an '@' and a '.' character");
}

if (password.length < 8) {
    isValid = false;
    messages.push('password must be at least 8 character long')
}
  
feedbackDiv.style.display = "block";
if (isValid) {
    feedbackDiv.textContent = "Registration successful!"
    feedbackDiv.style.color = "#28a745";
} else {
    feedbackDiv.innerHTML = messages.join ('<br>');
    feedbackDiv.style.color = "#dc3545";
    

}




