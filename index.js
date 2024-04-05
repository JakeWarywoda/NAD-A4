console.log('hello world')

const testEl = document.getElementById('test-el')

testEl.textContent='bye bye'

testEl.addEventListener('click', ()=>{
    console.log('clicked')
    testEl.innerHTML = "<b>clicked</b>"
})

testEl.addEventListener('mouseover', ()=>{
    console.log('on')
})

testEl.addEventListener('mouseout', ()=>{
    console.log('out')
})

document.addEventListener('scroll', ()=>{
    const posY = window.scrollY
    console.log(posY)
})