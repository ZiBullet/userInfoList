let url = 'http://localhost:3001/users'
export function openModal(modal, modal__bg, user) {
    modal.style.display = 'flex'
    modal__bg.style.display = 'block'
    setTimeout(() => {
        modal.style.opacity = '1'
        modal__bg.style.opacity = '1'
    }, 300);

    let oldName = modal.querySelector('.old__name')
    let oldAge = modal.querySelector('.old__age')
    let newName = modal.querySelector('#changedName')
    let newAge = modal.querySelector('#changedAge')
    let saveChangesBtn = document.querySelector('.btn__changer')

    oldName.innerHTML = user.name
    newName.value = user.name
    newAge.value = user.age
    oldAge.innerHTML = user.age
    saveChangesBtn.onclick = () => {
        axios.patch(url + "/" + user.id, {
            name: newName.value,
            age: newAge.value
        })
        closeModal(modal, modal__bg)
    }
}
export function closeModal(modal, modal__bg) {
    modal__bg.style.opacity = '0'
    modal.style.opacity = '0'
    setTimeout(() => {
        modal__bg.style.display = 'none'
        modal.style.display = 'none'
    }, 300);
}