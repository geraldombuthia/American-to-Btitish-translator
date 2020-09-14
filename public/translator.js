import { americanOnly } from './american-only.js';
import { britishOnly } from './british-only.js';
import { americanToBritishSpelling } from './american-to-british-spelling.js';
import { americanToBritishTitles } from './american-to-british-titles.js';
// import { text } from 'body-parser';

let textinput = document.getElementById("text-input")
let selector = document.getElementById("locale-select")
let translatebtn = document.getElementById("translate-btn")
let clearbtn = document.getElementById("clear-btn")
let translated = document.getElementById("translated-sentence")
let errormsg = document.getElementById("error-msg")
let lookUp = []
let selected = "american-to-british"

Object.keys(americanOnly).forEach(value => {
  lookUp.push([value, americanOnly[value]])
})
Object.keys(americanToBritishSpelling).forEach(value => {
  lookUp.push([value, americanToBritishSpelling[value]])
})
Object.keys(americanToBritishTitles).forEach(value => {
  lookUp.push([value, americanToBritishTitles[value]])
})
Object.keys(britishOnly).forEach(value => {
  lookUp.push([britishOnly[value], value])
})
console.log(lookUp)

selector.onchange = () =>{
  selected = selector.value
}

translatebtn.addEventListener("click", () => {
  errormsg.innerText = ""
  translated.innerHTML = ""
  let tranString = textinput.value
  let regex = /(([0-9]|0[0-9]|1[0-9]|2[0-3])(:|\.)([0-5][0-9]))/g
  let times = tranString.match(regex)
   
  if(selected === "american-to-british"){
    lookUp.forEach((arr) => {
      tranString = tranString.replace(arr[1], `<span class="highlight">${arr[0]}</span>`)
         if(times){
        times.forEach((time) => {
          tranString = tranString.replace(time, `<span class="highlight">${time.replace(".", ":")}</span>`)
        })
      }
    })
  } else{
    lookUp.forEach((arr) => {
      tranString = tranString.replace(arr[0], `<span class="highlight">${arr[1]}</span>`)
      if(times){
        times.forEach((time) => {
          tranString = tranString.replace(time, `<span class="highlight">${time.replace(".", ":")}</span>`)
        })
      }
    })
  }
   if(textinput.value === ''){
    return errormsg.innerText = "Error: No text to translate."
   }else if(textinput.value !== tranString){
    return translated.innerHTML = tranString
   } else{
    translated.innerHTML = "Everything looks fine to me."
   }
  

})

clearbtn.addEventListener("click", () => {
 translated.innerText = ""
 textinput.value = ""
})
try {
  module.exports = {

  }
} catch (e) {}
