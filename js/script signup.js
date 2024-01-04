
let inputEmail = document.getElementById('email');
let inputName = document.getElementById('name');
let inputPassword = document.getElementById('password');
let required = document.querySelector('.required')

let btn = document.querySelector('button')
let accounts=[];
if (localStorage.getItem('abonné')!= null) {
    accounts= JSON.parse(localStorage.getItem('abonné'))
    
}
let msg = document.querySelector('.msg');
let msg2 = document.querySelector('.msg_2');
let msg3 = document.querySelector('.msg_3');
let regexEmail = /^[a-zA-Z0-9.\-_]+@[a-zA-Z0-9]+\.[A-Za-z0-9]{2,4}$/;
let regexName = /^[a-zA-Z0-9.\-_]{3,}/;
let regexPassword = /^[a-zA-Z0-9.\-_]{8,}/;



btn.addEventListener('click',function () {
   if (inputEmail.value == '' || inputName.value =='' || inputPassword.value =='') {
    
    required.classList.replace('d-none' ,'d-flex' );
    required.innerHTML =`
    <p class="d-flex justify-content-center text-danger bg-transparent fs-5 required text-center"> All inputs is required</p>
    `
    inputEmail.classList.add('border-danger');
    inputName.classList.add('border-danger');
    inputPassword.classList.add('border-danger');


   }if (regexEmail.test(inputEmail.value) != true) {
   
    
    inputEmail.classList.add('border-danger');
    msg.classList.remove('d-none' ,'d-flex')

  
  }if (regexName.test(inputName.value) != true) {
    
    inputName.classList.add('border-danger');
     msg2.classList.remove('d-none' ,'d-flex')

  }if(regexPassword.test(inputPassword.value) != true){

    inputPassword.classList.add('border-danger');
     msg3.classList.remove('d-none' ,'d-flex')


  } else{



 add();
 clear(); 
 required.classList.replace('d-none','d-flex' );
 required.innerHTML = `
 <p class="d-flex justify-content-center text-success bg-transparent fs-5 required text-center"> Success</p>
 `
 inputEmail.classList.remove('border-danger');
 inputName.classList.remove('border-danger');
 inputPassword.classList.remove('border-danger');
 msg.classList.replace('d-flex','d-none');
 msg2.classList.replace('d-flex','d-none');
 msg3.classList.replace('d-flex','d-none');
}
})


//add


function add() {


    let account ={
        email : inputEmail.value,
        name : inputName.value,
        password: inputPassword.value
      }
      accounts.push(account);
      localStorage.setItem('abonné',JSON.stringify(accounts))




}
// clear
function clear() {
    inputEmail.value ='';
    inputName.value ='';
    inputPassword.value ='';
    
}