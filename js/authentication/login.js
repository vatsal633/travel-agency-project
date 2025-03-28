

let email = document.getElementById('email');
let password = document.getElementById('password');
let loginbtn = document.getElementById('loginbtn');

loginbtn.addEventListener('click', async function (event) {
    event.preventDefault(); // Fix: Use 'event' passed to the function

    if (email.value.trim() === '' || password.value.trim() === '') {
        alert('Please fill all the fields');
    } else {

        //making the api for store data in db
        try {

            const response = await fetch('http://localhost:8080/api/auth/login', {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    email: email.value.trim() ,
                    password: password.value.trim(), 
                })
            })


            let result = await response.json()

            if (result.status === 404) {
                alert('user not found or something else')
                return;
            }

            if (response.status === 400) {
                alert('Invalid email or password');
                return;
            }



            if (response.status === 200) {
                alert("Logged in successfully");

                // Storing token instead of password
                localStorage.setItem('user', JSON.stringify({
                    email: result.user.email,
                    token: result.token // Ensure your backend returns a JWT token
                }));

                window.location.href = "/login.html"; // Redirect to dashboard
            }
        } catch (err) {
            console.log("error while login")
        }
    }
});
