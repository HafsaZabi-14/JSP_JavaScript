let btn = document.getElementById('submit');
btn.addEventListener('click',()=>{
    console.log('hello world')
})

let btn1 = document.getElementById('bgbtn');
btn1.addEventListener('click',()=>{
    document.body.style.backgroundColor='grey'
})

let count = document.getElementById('count');

let inc = document.getElementById('increment');

let dec = document.getElementById('decrement');

inc.addEventListener('click', ()=>{
    count.innerText = Number(count.innerText)+1
})


dec.addEventListener('click', ()=>{
    count.innerText = Number(count.innerText)-1
})

let heading = document.getElementById('heading');
function hideText()
{
    heading.style.visibility='hidden'
}

function showText()
{
    heading.style.visibility='visible'
}
