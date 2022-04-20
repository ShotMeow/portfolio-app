export const routing = (targetID) => {
    document.querySelector(targetID).scrollIntoView({
        block: 'end'
    })
}