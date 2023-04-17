const defaultUsername = 'mahsook';
const defaultPassword = 'msm123';

const loginForm = document.querySelector('#login-form');
const emailInput = document.querySelector('#email');
const passwordInput = document.querySelector('#password');
const errorMessage = document.querySelector('#error-message');

loginForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const email = emailInput.value;
    const password = passwordInput.value;
    
    if (email === defaultUsername && password === defaultPassword) {
        // Redirect to home page
        window.location.href = './home.html';
    } else {
        // Display error message
        errorMessage.innerText = "Invalid credentials";
    }
});