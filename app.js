const usertext = document.getElementById('User_Text')
const upbtn = document.getElementById('upbtn')
// usertext.innerText= "hey iam sourav"

const uppercase = ()=>{
    let utext = usertext.value;
    up = utext.toUpperCase();
    // console.log(utext.toUpperCase())
    console.log(up)
    usertext.innerText.value = up;

    // usertext.innerText = "hey this is sourav"

    // usertext.innerHTML= utext.

}

upbtn.addEventListener('click',uppercase)