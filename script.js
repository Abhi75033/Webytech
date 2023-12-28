const hero = document.querySelector('.hero')
const body = document.querySelector('body')
const b1 = document.querySelector('#b1')
const b2 = document.querySelector('#b2')
const timer = document.querySelector('#timer')

function Dark(){
body.style.background='black'
hero.style.color='#fff'
b1.style.background='red'
b2.style.background='none'
b2.style.color = '#fff'

}

function light(){
    body.style.background='#fff'
    hero.style.color='#000'
    b1.style.background='none'
b2.style.background='red'
b2.style.color = '#000'
    }

    let count=0;
    const number=setInterval(() => {
       timer.innerHTML=`${count}+`
        count++;
        if(count>4000){
            clearInterval(number)
        }
    }, 0);

    

