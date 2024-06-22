document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Dummy authentication for demonstration purposes
    if (username === 'username' && password === 'password') {
        window.location.href = 'home.html';
    } else {
        alert('Invalid credentials. Please try again.');
    }
});

document.getElementById('logout-button')?.addEventListener('click', function() {
    window.location.href = 'index.html';
});
