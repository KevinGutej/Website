const sections = document.querySelectorAll('.section');
const sectButtons = document.querySelectorAll('.buttons');
const sectButton = document.querySelectorAll('.button');
const allSections = document.querySelector('.main');


function PageTransition() { //Button Active
    for(let i = 0; i < sectButton.length; i++) {
        sectButton[i].addEventListener('click', function() {
            let currentButton = document.querySelectorAll('.active-btn');
            currentButton[0].className = currentButton[0].className.replace('active-btn', '');
            this.className += ' active-btn'; //refering to this function
        })
    }

    allSections.addEventListener('click', (e) =>{
        const id = e.target.dataset.id;
        if(id){//removes selected from other buttons
            sectButtons.forEach((btn) => {
                btn.classList.remove('active')
            })
            e.target.classList.add('active')

            sections.forEach((section) => {
                section.classList.remove('active')
            })

            const element = document.getElementById(id);
            element.classList.add('active');
        }
    }) 
}

PageTransition();

