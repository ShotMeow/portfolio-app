export const positionCheck = (targetID) => {
    let links = document.querySelectorAll('.nav__link')
    let arrowTop = document.querySelector('.top')
    let arrowBottom = document.querySelector('.bottom')

    if (targetID != links[0].getAttribute('href'))
        arrowTop.classList.remove('hidden')
    else
        arrowTop.classList.add('hidden')

    if (targetID != links[links.length - 1].getAttribute('href'))
        arrowBottom.classList.remove('hidden')
    else
        arrowBottom.classList.add('hidden')
}