


let msg = document.querySelector('h1');
let user=JSON.parse(localStorage.getItem('name'));
let logout = document.querySelector('a')
msg.innerHTML = `
<h1 class="text-center fs-2 fw-bold">hello ${user.name}</h1>`


logout.addEventListener('click',function () {
    
  localStorage.removeItem("name");


})