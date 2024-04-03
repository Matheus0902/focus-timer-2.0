import * as el from "./elements.js"
import * as actions from "./actions.js"
import { stade } from "./stade.js"
import { finishTime } from "./sounds.js"

export function timeRunnig(){

  if(!stade.isRunning){
    return
  } 

  clearTimeout(stade.countDownId) 

  let minutes = Number(el.minutes.textContent)
  let seconds = Number(el.seconds.textContent)
  let thousandths = Number(el.thousandths.textContent)

  thousandths--

  if(thousandths < 1){
    thousandths = 59
    seconds--
  }

  if(seconds < 1){
    seconds = 59
    minutes--
  }

  actions.setMinutes(minutes, seconds, thousandths)

  if(minutes < 0){
    actions.stopCountdown()
    finishTime.play()
    return
  }

  stade.countDownId = setTimeout(() => timeRunnig(), 16.6)
}

export function displayUpdate(minutes, seconds, thousandths){
  minutes = minutes ?? stade.minutes
  seconds = seconds ?? stade.seconds
  thousandths = thousandths ?? stade.thousandths

  el.minutes.textContent = String(minutes).padStart(2, "0")
  el.seconds.textContent = String(seconds).padStart(2, "0")
  el.thousandths.textContent = String(thousandths).padStart(2, "0")
}