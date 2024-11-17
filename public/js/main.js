// Login
$(document).ready(function() {
    $('#loginForm').on('submit', function(event) {
        event.preventDefault();
        
        let email = $('#loginEmail').val().trim();
        let password = $('#loginPassword').val().trim();
        
        if (email && password) {
            console.log(`Email: ${email}`);
            console.log(`Password: ${password}`);
            alert('Login successful');
        } else {
            alert('Please fill in all fields');
        }
    });
});

// Register
$(document).ready(function() {
    $('#registerForm').on('submit', function(event) {
        event.preventDefault();
        
        let username = $('#username').val().trim();
        let email = $('#registerEmail').val().trim();
        let password = $('#registerPassword').val().trim();
        let confirmPassword = $('#confirmPassword').val().trim();
        
        if (username && email && password && confirmPassword) {
            if (password === confirmPassword) {
                console.log(`Username: ${username}`);
                console.log(`Email: ${email}`);
                console.log(`Password: ${password}`);
                alert('Register successful');
            } else {
                alert('Confirm password does not match');
            }
        } else {
            alert('Please fill in all fields');
        }
    });
});
