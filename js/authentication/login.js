let email = document.getElementById('email');
let password = document.getElementById('password');
let loginbtn = document.getElementById('loginbtn');

loginbtn.addEventListener('click', function(event) {
    event.preventDefault(); // Fix: Use 'event' passed to the function

    if (email.value.trim() === '' || password.value.trim() === '') {
        alert('Please fill all the fields');
    } else {
        let user = {
            email: email.value.trim(),
            password: password.value.trim()
        };

        // Save user data to localStorage
        localStorage.setItem('user', JSON.stringify(user));

        alert('User data saved successfully!');
        console.log('Saved User:', user); // Debugging output
    }


    
});
