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


// GET the data with ajax
const url = 'https://swapi.dev/api/people/'

// 1. jquery ajax method <- this is what we are going to use in the course

$.ajax({
    type: 'GET',
    url: url,
    success: function(response) {
        console.log('jquery ajax', response)
    },
    error: function(error) {
        console.log(error)
    }
})

// 2. XMLHttpRequest
const req = new XMLHttpRequest()

req.addEventListener('readystatechange', ()=>{
    if(req.readyState===4){
        console.log('xhttp', JSON.parse(req.responseText))
    }
})

req.open('GET', url)
req.send()

// 3. fetch method
fetch(url)
.then(resp=> resp.json()).then(data=> console.log('fetch', data))
.catch(err=> console.log(err))


// other popular: axios library, async await + fetch