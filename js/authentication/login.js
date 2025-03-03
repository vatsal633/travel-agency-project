import { json } from "body-parser";
import e from "express";
import { resolve } from "path";

let email = document.getElementById('email');
let password = document.getElementById('password');
let loginbtn = document.getElementById('loginbtn');

loginbtn.addEventListener('click', async function(event) {
    event.preventDefault(); // Fix: Use 'event' passed to the function

    if (email.value.trim() === '' || password.value.trim() === '') {
        alert('Please fill all the fields');
    } else {

        //making the api for store data in db
        try{

            const response = await fetch('http://localhost:8080/api/auth/login',{
                method:"POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body:JSON.stringify({email,password})
            })

            if(response.status(404)){
                console.log('user not found or something else')
            }

           

            if(response.status(202)){

            }
        }catch(err){
            console.log("error while login")
        }   



        //storing information in localstorage
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
