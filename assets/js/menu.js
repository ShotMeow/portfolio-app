export const menuVisibility = () => {
    const button = document.querySelector('.header__button')
    const list = document.querySelector('.nav__list')
    button.addEventListener('click', () => {
        list.classList.toggle('hidden')
    })
}