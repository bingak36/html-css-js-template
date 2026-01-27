const body = document.querySelector('body')
const header = document.querySelector('header')
const mobNavbtn = document.querySelector('.mob-nav-btn')
const navList = document.querySelectorAll('.nav-list li')

console.log(header)
console.log(body)

// const fixedarrow = document.querySelector('.fixed-arrow')
// console.log(fixedarrow)

navList.forEach((btn,i)=>{
    btn.addEventListener('click', (e)=> {
        e.preventDefault();
        console.log(i)
        
        document.querySelector(`#sec-${i+1}`).scrollIntoView({behavior:'smooth'})
    })
})

window.addEventListener('scroll', ()=>{
    if(window.scrollY>=100) {

        body.classList.add('scroll')
    }
    else {
        body.classList.remove('scroll')
        
    }
})

// fixedarrow.addEventListener('click', ()=> {
//     window.scrollTo({
//         top:0,
//         behavior:'smooth'
//     })
// })

mobNavbtn.addEventListener('click', (e) => {
    e.preventDefault();
    body.classList.toggle('mob-nav-open')
})