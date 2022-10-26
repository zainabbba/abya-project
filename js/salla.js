let salla = document.querySelector('#salla')
let salla_button = document.querySelector('.salla_button')
let counter_salla = document.getElementById('counter_salla')
let add_amount = document.querySelector('#add-amount')
let amount = document.querySelector('#amount')
let sub_amount = document.querySelector('#sub-amount')
let remove_product = document.querySelector('.remove_product')
let crad_product = document.querySelector('.crad_product')
let myform = document.querySelector('.myform')
let form_email = document.querySelector('.form_email')
let product_done = document.querySelector('.product-done')
let form_phone = document.querySelector('.form_phone')
let close = document.querySelector('#close')
let close_email = document.querySelector('#close_email')
let close_phone = document.querySelector('#close_phone')
console.log('hello', btn_phone)



let counter_amount = 0
add_amount.addEventListener('click', (e) => {

  counter_amount = counter_amount + 1
  amount.innerHTML = counter_amount


})


sub_amount.addEventListener('click', (e) => {
  if (counter_amount > 0) {
    counter_amount = counter_amount - 1
    amount.innerHTML = counter_amount
  }

})

remove_product.addEventListener('click', (e) => {

  crad_product.innerHTML = `<div class='card_product_style'> <i class="fas fa-heart-broken" style='font-size:50px;color:red'></i> <br> <br> السله فارغه</div>`;

})


myform.style.display = "none";

product_done.addEventListener('click', (e) => {
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