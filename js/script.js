



let inputEmail = document.getElementById('email');
let inputName = document.getElementById('name');
let required = document.querySelector('.required');
let btn = document.querySelector('button');


let accounts=[];
console.log(localStorage.getItem('abonné'))
if (localStorage.getItem('abonné') != null) {
    accounts= JSON.parse(localStorage.getItem('abonné'))
}

btn.addEventListener('click',function () {
    connect()
   
})



function connect() {

    for (let i = 0; i < accounts.length; i++) {
       
        if (inputEmail.value == accounts[i].email && inputName.value == accounts[i].name) {
           
       localStorage.setItem('name',JSON.stringify(accounts[i]))
            location.href ='./login.html' ;
            

        }
        if (inputEmail.value =='' || inputName.value =='') {

            required.classList.replace('d-none','d-flex')    
            required.innerHTML=`
            <p class="d-flex  justify-content-center text-danger bg-transparent fs-5 required text-center">All inputs is required</p>
            `
          }
    if (inputEmail.value != accounts[i].email || inputName.value != accounts[i].name) {

                
     required.classList.replace('d-none','d-flex')
     required.innerHTML=`
            <p class="d-flex justify-content-center text-danger bg-transparent fs-5 required text-center">name or email is wrong</p>
            `
             }
             if (inputEmail.value =='' || inputName.value =='') {

                required.classList.replace('d-none','d-flex')    
                required.innerHTML=`
                <p class="d-flex  justify-content-center text-danger bg-transparent fs-5 required text-center">All inputs is required</p>
                `
              }
    
        
    }   
       
           
       }















    
