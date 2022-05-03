import {themes} from "./themes.js"
import { operation } from "./calculadora.js"

const range = document.getElementById('rango')


range.addEventListener('change', ()=>{

const rango = Number(document.getElementById('range').value);

themes(rango)
})

operation()