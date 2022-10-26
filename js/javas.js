
let salla_init = document.getElementById('salla_init')
let salla_button = document.querySelector('.salla_button')
let icon_salla = document.querySelector('.icon_salla')
let counter = 0

salla_button.addEventListener('click', (e) => {
    console.log('hello')

    counter = counter + 1

    console.log(counter)
    salla_init.innerHTML = counter
})


icon_salla.addEventListener('click', (e) => {
    if (salla_init.innerText >= 1) {
        console.log('salla_init.innerHTML')
        window.location.href = 'salla.html';
    }
    else {
        console.log('h')
    }


})
