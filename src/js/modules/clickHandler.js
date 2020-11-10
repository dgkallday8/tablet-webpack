import rate from './rate'
import {backToMain} from './switching'
import {weather, getCity} from './weather'
import errorPage from './error'
import {settings, backChange, changeTabletColor} from './settings'


const clickHandler = event => {
    const {type} = event.target.dataset

    switch (type) {
        case 'rate':
            rate()
            console.log('курс валют')
            break

        case 'weather':
            display.innerHTML = weather()
            getCity()
            console.log('погода')
            break

        case 'back':
            backToMain()
            // clearClockInterval()
            console.log('назад')
            break

        case 'settings':
            const form = document.forms.form
            display.innerHTML = settings()
            backChange()
            changeTabletColor()
            console.log('настройки')
            break

        default:
            display.innerHTML = errorPage()
            console.log('ошибка что то не так')
            break
    }

}

export {clickHandler}
