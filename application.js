const sections = document.querySelectorAll('.section');
const sectButtons = document.querySelectorAll('.buttons');
const sectButton = document.querySelectorAll('.button');
const allSections = document.querySelectorAll('.main');


function PageTransition() { //Button Active
    for(let i = 0; i < sectButton.length; i++) {
        sectButton[i].addEventListener('click', function() {
            let currentButton = document.querySelectorAll('.active-btn');
            currentButton[0].className = currentButton[0].className.replace('active-btn', '');
            this.className += ' active-btn'; //refering to this function
        })
    }
}

PageTransition();