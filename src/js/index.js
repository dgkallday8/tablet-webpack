import '../styles/styles.scss'
import {on, off, btn, display} from './modules/switching'


const toggleDisplay = () => display.classList.contains('off') ? on() : off()
btn.addEventListener('click', toggleDisplay)






