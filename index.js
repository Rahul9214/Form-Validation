// Validate the password field
function validateForm() {
    const password = document.getElementById("password").value;
    const rePassword = document.getElementById("repassword").value;

    if (password !== rePassword) {
        alert("Passwords do not match!");
        return false;
    }
    return true;
}

// Add an event listener to show the message box when the password field is clicked
document.getElementById("password").addEventListener("focus", () => {
    document.getElementById("message").style.display = "block";
});

// Add an event listener to hide the message box when the password field loses focus
document.getElementById("password").addEventListener("blur", () => {
    document.getElementById("message").style.display = "none";
});

const form = document.querySelector('#myForm');
const thankYouMessage = document.querySelector('#thank-you-message'); 
form.addEventListener('submit', (e) => {
    e.preventDefault();
    thankYouMessage.textContent = 'Form submitted successfully!';
    thankYouMessage.style.color = 'green';
    setTimeout(() => {
        form.submit(); 
    }, 1000);
});