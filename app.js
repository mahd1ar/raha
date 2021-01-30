const menuToggle = document.querySelector('.toggle');
const showcase = document.querySelector('.showcase');

menuToggle.addEventListener('click', () => {
    menuToggle.classList.toggle('active');
    showcase.classList.toggle('active');
})

document.querySelector('.menu ul').addEventListener('click',()=>{
    whatISYourNameStart()
    menuToggle.classList.toggle('active');
    showcase.classList.toggle('active');
})


function clockStart(){
    
    
    const clock = document.querySelector('#clock')
    setInterval(() => {
        const time = new Date();
        const hours = time.getHours() < 10 ? '0' + time.getHours() : time.getHours(),
        minutes = time.getMinutes() < 10 ? '0' + time.getMinutes() : time.getMinutes(),
        seconds = time.getSeconds() < 10 ? '0' + time.getSeconds() : time.getSeconds()
        
        clock.innerHTML = `${hours} : ${minutes} : ${seconds}`
        
    }, 1000);
    
}

// GOOD MORNING NIGHT AFTERNOON
function goodmorningStart(){

    let hours = new Date(),
    message = 'good '
    hours = hours.getHours()
    
    if (4 < hours && hours < 13) {
        message += 'morning'
    } else if (12 < hours && hours < 18) {
        message += 'afternoon'
    } else {
        message += 'night'
    }
    document.querySelector('.text h3 span').innerText = message
    
}


// FOCUSE INPUTE
function focuseGoogle(e) {

    if (e.keyCode === 13) {
        window.location.href = 'https://google.com/search?q=' + encodeURIComponent(document.querySelector('#input-search').value)
    }
    document.getElementById('input-search').focus();

    const firstWord = document.querySelector('#input-search').value.split(' ')[0]
    console.log(firstWord)

    if (/^[\u0600-\u06FF]+/.test(firstWord)) {
        document.querySelector('.text div').style.flexDirection = "row-reverse"
        const element = document.querySelector('.text input')

        element.setAttribute('style', 'direction: rtl;font-family: samim !important;');



    } else {
        document.querySelector('.text div').style.flexDirection = "row"
        const element = document.querySelector('.text input')

        element.setAttribute('style', 'direction: ltr;font-family: Nunito, sans-serif !important;');

    }
}

function jskeydown() {
    document.addEventListener('keydown', focuseGoogle)
}

function jskeydownUnbind() {
    document.removeEventListener('keydown', focuseGoogle)
}


function whatISYourNameClose() {

    document.querySelector('section.slide').classList.remove('slide-top')
    jskeydown()
}

function whatISYourNameStart() {

    jskeydownUnbind()
    // show qustion
    document.querySelector('section.slide').classList.add('slide-top')

    document.querySelector('.slide input').value = localStorage.getItem('myname') || '';

    document.querySelector('.slide #close-name').addEventListener('click', () => {
        whatISYourNameClose()
    })

    document.querySelector('.slide form').addEventListener('submit', () => {
        const myName = document.querySelector('.slide input').value
        document.querySelector('.text h3 b').innerText = myName;
        localStorage.setItem('myname', myName)
        whatISYourNameClose()
    })
}

window.onload = () => {

    document.querySelector('.text div').addEventListener('click', () => {
        document.getElementById('input-search').focus()
    })

    if (localStorage.getItem('myname') === null) {
        whatISYourNameStart()
    } else {
        document.querySelector('.text h3 b').innerText = localStorage.getItem('myname')
        jskeydown()

    }

    clockStart();
    goodmorningStart();
}