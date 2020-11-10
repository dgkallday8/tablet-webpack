import {backBtn} from './switching'

export default function rate() {
    backBtn.style.display = 'block'
    ajaxRequestToCBR()
}
function ajaxRequestToCBR () {
    const compare = (yesterdayVal, todayValue) => yesterdayVal > todayValue ? '&#9650;' : '&#9660;'
    const request = new XMLHttpRequest()
    request.open('GET', 'https://www.cbr-xml-daily.ru/daily_json.js', true)
    request.onload = function () {
        if (request.status === 200) {
            const file = JSON.parse(request.responseText)
            display.innerHTML = `
                <div class="rate">
                    <div class="rate-block">
                        <div class="valute">
                            <p>${file.Valute.EUR.Name}: </p>
                            <p>${file.Valute.EUR.Value} руб.</p>
                            <p>${compare(file.Valute.EUR.Previous, file.Valute.EUR.Value)}</p>
                        </div>
                        <div class="valute">
                            <p>${file.Valute.USD.Name}: </p>
                            <p>${file.Valute.USD.Value} руб.</p>
                            <p>${compare(file.Valute.USD.Previous, file.Valute.USD.Value)}</p>
                        </div>
                        <div class="valute">
                            <p>${file.Valute.CNY.Name}: </p>
                            <p>${file.Valute.CNY.Value} руб.</p>
                            <p>${compare(file.Valute.CNY.Previous, file.Valute.CNY.Value)}</p>
                        </div>
                    </div>
                </div>
            `
        }
    }
    request.send()
}