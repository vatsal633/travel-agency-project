let username = document.getElementById('username');
let email = document.getElementById('email');
let password = document.getElementById('password');
let repass = document.getElementById('repass');
let register_btn = document.getElementById('register_btn');
let errorms = document.getElementById('error-msg')


register_btn.addEventListener('click',async function(){
    event.preventDefault()
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


            //post api for storing the data
            try{
                const response = await fetch('http://localhost:8080/api/auth/register',{
                    method:"POST",
                    headers:{
                        "Content-type":"application/json"
                    },
                    body:JSON.stringify(data)
                })

                let result = await response.json()

                if(response.status===400){
                    console.log("username or email already exist")
                }
            }catch(err){
                console.log('fasing some issue while saving the data',err)
                errorms.innerHTML = err
            }


            //saving info in local storage
            localStorage.setItem(data.username,JSON.stringify(data));
            // alert('User data saved successfully!');
            console.log('Saved User:', data); // Debugging output
            

            // for(let i=0; i<localStorage.length; i++){
            //     let key = localStorage.key(i);
            //     let value = JSON.parse(localStorage.getItem(key));
            //     console.log(key,value);
            // }
        }
    }
})

