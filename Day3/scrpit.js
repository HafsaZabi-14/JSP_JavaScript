console.log(document)

let head=document.getElementById('head');
console.log(head)

let para = document.getElementById('para');
console.log(para)


// let paras = document.getElementsByClassName('para');
// console.log(paras);

let btns = document.getElementsByTagName('button');
console.log(btns)

let head1 = document.getElementById('head');
head.innerText = 'Hello GoodMorning'
console.log(head.innerHTML)

let cont = document.getElementById('container');
console.log(cont)
console.log(cont.innerText);
console.log(cont.innerHTML)

let paras = document.getElementsByClassName('para')
console.log(paras)
console.log(paras[1].innerHTML)