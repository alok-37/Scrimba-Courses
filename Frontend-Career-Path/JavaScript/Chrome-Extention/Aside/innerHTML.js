// Use .innerHTML to render a Buy! button inside the div container

const BUY = document.getElementById('container');
BUY.innerHTML = `<button>BUY</button>`

// When clicked, render a paragraph under the button (in the container)
// that says "Thank you for buying!"

BUY.addEventListener('click',function thankYou() {
    BUY.innerHTML += `<p>Thank you for buying!</p>`
});
