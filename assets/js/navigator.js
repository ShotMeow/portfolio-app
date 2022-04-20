export const navigator = () => {
    const buttons = document.querySelectorAll('.navigator__button')
    const articles = document.querySelectorAll('.chapter')
    const heading = document.querySelector('.article__title-block')

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            for (let i = 0; i < buttons.length; i++) {
                if (buttons[i].id == button.id) {
                    buttons[i].closest('li').classList.add('active')
                    articles[i].classList.remove('hidden')
                    heading.querySelector('.article__title-background').textContent = buttons[i].querySelector('.navigator__name').textContent
                    heading.querySelector('.article__title').textContent = buttons[i].querySelector('.navigator__name').textContent
                } else {
                    buttons[i].closest('li').classList.remove('active')
                    articles[i].classList.add('hidden')
                }
            }
        })
    })

    const technologies = document.querySelectorAll('.article__button')
    const lists = document.querySelectorAll('.chapter__list')
    technologies.forEach(button => {
        button.addEventListener('click', () => {
            for (let i = 0; i < technologies.length; i++) {
                if (technologies[i] == button) {
                    technologies[i].classList.add('active')
                    lists[i].classList.remove('hidden')
                } else {
                    technologies[i].classList.remove('active')
                    lists[i].classList.add('hidden')
                }
            }
        })
    })
}