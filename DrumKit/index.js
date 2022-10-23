const allBtn = document.querySelectorAll("button")

allBtn.forEach(btn => btn.addEventListener('click', () => {
    var btnInnerText = btn.innerHTML

    makeSound(btnInnerText);
    buttonAnimation(btnInnerText);
    }
))

document.addEventListener('keypress', (e) => {
    var pressKey = e.key
    makeSound(pressKey);
    buttonAnimation(pressKey);
})

const makeSound = (key) => {
    switch(key) {
        case 'w':
            var tom1 = new Audio('sounds/tom-1.mp3');
            tom1.play();
        break;

        case 'a':
            var tom2 = new Audio('sounds/tom-2.mp3');
            tom2.play();
        break;

        case 's':
            var tom3 = new Audio('sounds/tom-3.mp3');
            tom3.play();
        break;

        case 'd':
            var tom4 = new Audio('sounds/tom-4.mp3');
            tom4.play();
        break;

        case 'j':
            var snare = new Audio('sounds/snare.mp3');
            snare.play();
        break;

        case 'k':
            var crash = new Audio('sounds/crash.mp3');
            crash.play();
        break;

        case 'l':
            var kick = new Audio('sounds/kick-bass.mp3');
            kick.play();
        break;
    }
}

const buttonAnimation = (key) => {

    var activeBtn = document.querySelector(`.${key}`)

    activeBtn.classList.add('pressed')

    setTimeout(() => {
        activeBtn.classList.remove('pressed')
    }, 100)
}