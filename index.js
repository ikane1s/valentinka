const button = document.querySelector(".button-no");

function moveRandom() {
    const randomX = Math.random() * (window.innerWidth - 1000);
    const randomY = Math.random() * (window.innerHeight - 1000);

    button.style.left = randomX + 'px';
    button.style.top = randomY + 'px';
}

button.addEventListener('click', moveRandom);
