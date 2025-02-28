let email = document.getElementById('email')
let username = document.getElementById('username')
let newdiv = document.getElementById('codesubmitDiv')
let CodeSubmitInput = document.getElementById('CodeSubmitInput')
let CodeSubmitBtn = document.getElementById('CodeSubmitBtn')

newdiv.style.display = 'none'
let isdisplaytrue = false;


let generated_code = 0

document.getElementById('sendCodebtn').onclick = () => {

    let usernameDiv = document.getElementById('usernameDiv')
    let emailDiv = document.getElementById('emailDiv')

    let user = {
        email: email.value,
        username: username.value
    }

    if (user.email === '' || user.username === '') {
        alert('Please fill in all fields')
        return
    } else {

        let code = Math.floor(Math.random() * 10000)
        generated_code = code
        emailDiv.style.display = 'none'
        usernameDiv.style.display = 'none'
        document.getElementById('sendCodebtn').style.display = 'none'


        let newbtn = document.createElement('button')//child
        let submitbtndiv = document.getElementById('submitbtndiv')//parent

        //add class to child element
        newbtn.classList.add('btn', 'btn-primary', 'btn-block')
        newbtn.setAttribute('id', 'CodeSubmitBtn')
        newbtn.textContent = 'Submit Code'//add the text in btn
        newbtn.addEventListener('click', matchcode)//add event listener to button

        submitbtndiv.appendChild(newbtn)//append child in parent

        newdiv.style.display = 'block'
        isdisplaytrue = true
        console.log(generated_code)
    }

}




const matchcode = () => {
    let enteredcode = CodeSubmitInput.value
    console.log(enteredcode)
    if (enteredcode == generated_code) {
        alert('Code Matched')
    }
    else {
        alert('Code did not match')
    }
}
