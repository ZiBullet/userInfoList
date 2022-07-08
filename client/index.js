// ______________________Import area_____________________
import { tableUser, cardUser } from "./scripts/itemCreatorFunctions.js";
// _________________________________________________________
let url = 'http://localhost:3001/users'
function getAxios (url, func) {
    axios.get(`${url}/`)
    .then(res => {
        if (res.status === 200 || res.status === 201) {
            func(res.data)
        }
    })
}
let cardContainer = document.querySelector('.users__list-card')
let tableContainer = document.querySelector('.users__list-table')
let forms = document.forms
// ________________________Form on submit______________________
for (let form of forms) {
    form.onsubmit = (event) => {
        event.preventDefault()
        let errs = [] 
        let inputs = form.querySelectorAll('input')
        inputs.forEach(input => {
            if (input.value.length === 0) {
                errs.push('error')
            }
        })
        errs.length === 0 ? submit(form) : console.log('Fill the missed fields');
        getAxios(url, tableUser)
        getAxios(url, cardUser)
    }
}
function submit (form) {
    let user = {
        id: Math.random()
    }
    let fm = new FormData(form) 
    fm.forEach((value, key) => {
        user[key] = value
    })
    if (form === userAdder) {
        axios.post(url, user)
    } 
}

let typeChanger = document.querySelector('.type__changer')
typeChanger.onclick = () => {
    if (typeChanger.innerHTML === 'Карточка') {
        typeChanger.innerHTML = 'Таблица'
        appearEll(tableContainer, cardContainer)
        getAxios(url, tableUser)
    } else {
        typeChanger.innerHTML = 'Карточка'
        appearEll(cardContainer, tableContainer)
        getAxios(url, cardUser)
    }
}
function appearEll (appear, disappear) {
        setTimeout(() => {
            appear.style.opacity = '1'
        }, 300)
        disappear.style.opacity = '0'
        setTimeout(() => {
            if (appear.classList.contains('users__list-table')) {
                appear.style.display = 'table'
            } else {
                appear.style.display = 'flex'
            }
            disappear.style.display = 'none'
        }, 200)
}
getAxios(url, cardUser)
getAxios(url, tableUser)