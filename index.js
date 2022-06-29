// ______________________Import area_____________________
import { tableUser, cardUser } from "./scripts/itemCreatorFunctions.js";
import { users } from "./scripts/db.js";
// _________________________________________________________

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
        tableUser(users)
        cardUser(users)
    }
}
function submit (form) {
    let user = {}
    let fm = new FormData(form) 
    fm.forEach((value, key) => {
        user[key] = value
    })
    if (form === userAdder) {
        users.push(user)
    } 
}

let typeChanger = document.querySelector('.type__changer')
typeChanger.onclick = () => {
    if (typeChanger.innerHTML === 'Карточка') {
        typeChanger.innerHTML = 'Таблица'
        appearEll(tableContainer, cardContainer)
        tableUser(users)
    } else {
        typeChanger.innerHTML = 'Карточка'
        appearEll(cardContainer, tableContainer)
        cardUser(users)
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
cardUser(users)
tableUser(users)