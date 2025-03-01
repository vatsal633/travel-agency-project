let username = document.getElementById('username');
let email = document.getElementById('email');
let password = document.getElementById('password');
let repass = document.getElementById('repass');
let register_btn = document.getElementById('register_btn');


register_btn.addEventListener('click',function(){
    if(username.value == '' || email.value == '' || password.value == '' || repass.value == ''){
        alert('Please fill all the fields');
    }else{
        if(password.value != repass.value){
            alert('Password does not match');
        }else{
            let data = {
                username: username.value,
                email: email.value,
                password: password.value
            }


            localStorage.setItem(data.username,JSON.stringify(data));
            alert('User data saved successfully!');
            console.log('Saved User:', data); // Debugging output
            

            // for(let i=0; i<localStorage.length; i++){
            //     let key = localStorage.key(i);
            //     let value = JSON.parse(localStorage.getItem(key));
            //     console.log(key,value);
            // }
        }
    }
})

