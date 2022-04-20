import { positionCheck } from "./positionCheck.js"
import { routing } from "./routing.js"

export const scroll = () => {
    let links = document.querySelectorAll('.nav__link')
    let arrowTop = document.querySelector('.top')
    let arrowBottom = document.querySelector('.bottom')
    let targetID = links[0].getAttribute('href')

    routing(targetID)

    links.forEach((link) => {
        link.addEventListener('click', function (e) {
            e.preventDefault()
            targetID = link.getAttribute('href')
            routing(targetID)

            positionCheck(targetID)
        })
    })

    arrowBottom.addEventListener('click', () => {
        for (let i = 0; i < links.length; i++) {
            if (links[i].getAttribute('href') == targetID) {
                targetID = links[i + 1].getAttribute('href')
                routing(targetID)
                break
            }
        }

        positionCheck(targetID)
    })

    arrowTop.addEventListener('click', () => {
        for (let i = 0; i < links.length; i++) {
            if (links[i].getAttribute('href') == targetID) {
                targetID = links[i - 1].getAttribute('href')
                routing(targetID)
                break
            }
        }

        positionCheck(targetID)
    })

    window.addEventListener('wheel', (e) => {
        if (e.wheelDelta > 0) {
            if (links[0].getAttribute('href') == targetID)
                return
            for (let i = 0; i < links.length; i++) {
                if (links[i].getAttribute('href') == targetID) {
                    targetID = links[i - 1].getAttribute('href')
                    routing(targetID)
                    break
                }
            }
            positionCheck(targetID)
        } else {
            if (links[links.length - 1].getAttribute('href') == targetID)
                return
            for (let i = 0; i < links.length; i++) {
                if (links[i].getAttribute('href') == targetID) {
                    targetID = links[i + 1].getAttribute('href')
                    routing(targetID)
                    break
                }
            }
            positionCheck(targetID)
        }
    })
}