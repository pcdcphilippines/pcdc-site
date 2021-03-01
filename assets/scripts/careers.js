let engineers = document.querySelector('#engineers');
let labor = document.querySelector('#labors');
let operators = document.querySelector('#operators');

engineers.addEventListener('click', (e) => {
    window.location.replace('./engineering.html')

    console.log('clicked')
})

labor.addEventListener('click', (e) => {
    window.location.replace('./skilled.html')

    console.log('clicked')
})

operators.addEventListener('click', (e) => {
    window.location.replace('./operators.html')

    console.log('clicked')
})



