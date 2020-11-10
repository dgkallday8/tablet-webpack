import {clickHandler} from './clickHandler'
import {backBtn} from './switching'

const getMainMenu =() => {
    return `
        <div class="menu">
            <ul class="menu-list">
                <li data-type="rate">
                    Курс валют
                </li>
                <li data-type="weather">
                    Погода
                </li>
                <li data-type="settings">
                    Настройки
                </li>
            </ul>
        </div>
    `
}

const getLinks = () => {
    const links = document.querySelectorAll('li')
    backBtn.addEventListener('click', clickHandler)
    for (let link of links) {
        link.addEventListener('click', clickHandler)
    }
}

export {getMainMenu,getLinks}
