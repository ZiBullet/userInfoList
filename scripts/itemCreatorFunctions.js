// _______________________Import area___________________________________

import { closeModal, openModal } from "./modal.js"
// _____________________________________________________________
let modal = document.querySelector('.modal__changer-container')
let modalBg = document.querySelector('.modal__chager-bg')
let tbd = document.querySelector('tbody')
let containers = document.querySelectorAll('.user__age')
// ___________________Functions for appearing user by table type___________________________
function tableUser(users) {
    // _______________________________Creating table function / creating row___________________________
    tbd.innerHTML = ''
    for (let user of users) {
        let row = document.createElement('tr')
        let userOrder = document.createElement('td')
        let userName = document.createElement('td')
        let userAge = document.createElement('td')
        // _______________________Icons___________________
        let rowActions = document.createElement('td')
        let del = document.createElement('img')
        let edit = document.createElement('img')
        // ____________________________Decorating row________________________________
        userOrder.innerHTML = users.indexOf(user) + 1
        userName.innerHTML = user.name
        userAge.innerHTML = new Date().getFullYear() - user.age
        del.src = '../assets/svg/icon__trash.svg'
        edit.src = '../assets/svg/icon__edit.svg'
        // _________________________Connecting each element to its place_______________________
        tbd.append(row)
        row.append(userOrder, userName, userAge, rowActions)
        rowActions.append(edit, del)
        // ______________________________Table events____________________________________
        edit.onclick = () => {
            openModal(modal, modalBg, user)
        }
        del.onclick = () => {
            let indx = users.indexOf(user)
            users.splice(indx, 1)
            tableUser(users)
        }
    }
}
modalBg.onclick = () => {
    closeModal(modal, modalBg)
}
// _______________________________Creating card function_______________________
function cardUser(users) {
    let teen = document.createElement('h2')
    let senior = document.createElement('h2')
    let other = document.createElement('h2')
    containers.forEach(con => {
        con.innerHTML = ''
    });
    teen.innerHTML = 'Люди до 25'
    senior.innerHTML = 'Люди до 50'
    other.innerHTML = 'Остальные'
    document.querySelector('.users__teen__aged').append(teen)
    document.querySelector('.users__senior__aged').append(senior)
    document.querySelector('.users__other__aged').append(other)

    // ___________________Creating card of user___________________________
    for (let user of users) {
        let card = document.createElement('div')
        let userName = document.createElement('h2')
        let userAgeBox = document.createElement('div')
        let spanAge = document.createElement('span')
        let userAge = document.createElement('b')
        // _________________Decorating it_______________________
        card.classList.add('box')
        userName.innerHTML = user.name
        userAgeBox.classList.add('user-age')
        spanAge.innerHTML = 'Age:'
        userAge.innerHTML = user.age
        // ________________________Connecting each element to other______________________
        if (user.age <= 25) {
            document.querySelector('.users__teen__aged').append(card)
        } else if (user.age <= 50) {
            document.querySelector('.users__senior__aged').append(card)
        } else {
            document.querySelector('.users__other__aged').append(card)
        }
        card.append(userName, userAgeBox)
        userAgeBox.append(spanAge, userAge)
        // __________________________Card Events_________________________
        card.onclick = () => {
            openModal(modal, modalBg, user)
        }
    }
}
export { tableUser, cardUser }