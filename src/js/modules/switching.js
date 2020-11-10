import {getLinks, getMainMenu} from './menu'
import {clickHandler} from './clickHandler'


const display = document.getElementById('display')
const btn = document.getElementById('btn')
const backBtn = document.getElementById('back')

const backToMain = () => {
    backBtn.style.display = 'none'
    display.innerHTML = getMainMenu()
    backBtn.removeEventListener('click', clickHandler)
    getLinks()
}

function off() {
    display.classList.remove('on')
    display.classList.add('off')
    display.innerHTML = ''
    btn.style.background = '#5e6163'
    backBtn.style.display = 'none'
    setTimeout(() => {
        btn.style.removeProperty('background')
    }, 500)
}
function on() {
    display.classList.remove('off')
    display.classList.add('on')
    btn.setAttribute('disabled', 'disabled')
    btn.style.background = '#5e6163'
    setTimeout(() => {
        btn.style.removeProperty('background')
        btn.removeAttribute('disabled')
        display.innerHTML = getMainMenu()
        getLinks()
    }, 1200)
}

export {on, off, btn, display, backBtn, backToMain}