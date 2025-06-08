const usertext = document.getElementById('User_Text')

const upbtn = document.getElementById('upbtn')
const lowbtn = document.getElementById('lowbtn')

const uppercase = ()=>{
    usertext.value =  usertext.value.toUpperCase();
}

upbtn.addEventListener('click',uppercase)

const lowercase = ()=>{
    usertext.value =  usertext.value.toLowerCase();
}
lowbtn.addEventListener('click',lowercase)
