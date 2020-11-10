import {backBtn} from './switching'

const body = document.body



function settings() {
    backBtn.style.display = 'block'
    return `
        <div id="settings" class="settings display-size">
            <form action="#" name="form">
                <fieldset class="setBack">
                    <p>Фон</p>
                    <div>
                        <label><input value="wood" name="background" type="radio">&nbsp; &nbsp;Дерево</label>
                        <label><input value="night" name="background" type="radio">&nbsp; &nbsp;Ночь</label>
                        <label><input value="meadow" name="background" type="radio">&nbsp; &nbsp;Луг</label>
                        <label><input value="space" name="background" type="radio">&nbsp; &nbsp;Космос</label>
                    </div>
                </fieldset>
                <fieldset>
                    <div id="colorVal">
                        <p>Цвет планшета</p>
                        <input name="color" type="color">
                    </div>
                </fieldset>
            </form>
        </div>
    `
}
function setBackground(name) {
    body.style.background = `url("img/${name}.jpg")`
    body.style.backgroundSize = 'cover'
}

function backChange() {
    const backgroundRadio = form.elements.background
    for (let radio of backgroundRadio) {
        radio.addEventListener('focus', () => {
            switch (radio.value) {
                case 'wood':
                    setBackground('wood')
                    break
                case 'night':
                    setBackground('night')
                    break
                case 'meadow':
                    setBackground('meadow')
                    break
                case 'space':
                    setBackground('space')
                    break
            }
        })
    }
}
function changeTabletColor () {
    const colorOfTablet = form.elements.color
    const colorVal = document.getElementById('colorVal')
    const tablet = document.getElementById('tablet')
    colorVal.addEventListener('change', () => {
        tablet.style.background = colorOfTablet.value
    })
}

export {settings, backChange, changeTabletColor}