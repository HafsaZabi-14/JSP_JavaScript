let heading = document.createElement('h1')
heading.innerText = 'Hello World'
heading.style.color = 'crimson'
document.body.append(heading)

// let container = document.getElementById('container')
// let h2 = document.createElement('h2')
// h2.style.color = 'blue'
// h2.innerText = "This is heading inside the container"
// container.appendChild(h2)

// let para = document.createElement('p')
// para.innerText = "This is the para content appended inside the container"
// para.style.backgroundColor = 'violet'
// container.appendChild(para)

// let btn = document.createElement('button')
// btn.innerText = 'click'
// container.appendChild(btn)

container.innerHTML = '<h2>This is h2 from container</h2><p>This is para</p><button>click</button'

let users = ['Abhay', 'Bharat', 'Chethan', 'Divakar', 'Eshwar', 'Pawan'];

let list = document.getElementById('list')
let h1 = document.createElement('h1')
h1.innerText = `This is list of ${users.length} users`;
list.appendChild(h1)

for(let i=0; i<users.length; i++)
{
    let li = document.createElement('li')
    li.innerText = users[i]
    list.appendChild(li)
}

let employees=[
    {
        name:'Mirha',
        id:101,
        salary:10000
    },
    {
        name:'Mehwish',
        id:102,
        salary:15000
    },
    {
        name:'Arhab',
        id:103,
        salary:25000
    }
]

let table = document.getElementById('employee_table');

for(let i=0; i<employees.length; i++)
{
    // console.log(employees)
}