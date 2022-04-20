export const positionCheck = (targetID) => {
    const links = document.querySelectorAll('.nav__link')
    const arrowTop = document.querySelector('.top')
    const arrowBottom = document.querySelector('.bottom')
    const social = document.querySelector('.footer__social')



    if (targetID != links[0].getAttribute('href'))
        arrowTop.classList.remove('hidden')
    else
        arrowTop.classList.add('hidden')

    if (targetID != links[links.length - 1].getAttribute('href')) {
        arrowBottom.classList.remove('hidden')
        social.style.transform = 'translateY(0px)'
    }
    else {
        arrowBottom.classList.add('hidden')
        social.style.transform = 'translateY(200px)'
    }
}