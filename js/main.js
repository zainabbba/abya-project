
let myform = document.querySelector('.myform_main')
let form_email = document.querySelector('.formMain_email')
let form_phone = document.querySelector('.formMain_phone')
let close = document.querySelector('#close')
let close_email = document.querySelector('#close_email')
let close_phone = document.querySelector('#close_phone')
myform.style.display = "none";
let icon_customer = document.querySelector('#icon_customer')
console.log('hello', icon_customer)

let header = document.querySelector('header')


icon_customer.addEventListener('click', (e) => {
  console.log("hello");
  myform.style.display = "block";

})


form_email.style.display = 'none'

document.getElementById('btn_email').addEventListener('click', (e) => {
  myform.style.display = "none";
  form_email.style.display = "block";
})

form_phone.style.display = "none";

document.getElementById('btn_phone').addEventListener('click', (e) => {
  myform.style.display = "none";
  form_email.style.display = "none";
  form_phone.style.display = "block";
  console.log("hello zainab")

})
close.addEventListener('click', (e) => {
  myform.style.display = "none";
})


close_phone.addEventListener('click', (e) => {
  myform.style.display = "none";

  form_phone.style.display = "none";

})

close_email.addEventListener('click', (e) => {
  myform.style.display = "none";

  form_email.style.display = "none";

})


