import { stade } from "./stade.js" 
import * as timer from "./timer.js"
import * as el from "./elements.js"
import * as sound from "./sounds.js"

export function startCountdown(){
  el.startCountdown.disabled = true
  stade.isRunning = true
  timer.timeRunnig()
}

export function stopCountdown(){
  el.startCountdown.disabled = false
  stade.isRunning = false
  timer.displayUpdate()
}

export function addFiveMinutes(){

  stade.btnAddFiveMinutes = true
  stade.btnDecreaseFiveMinutes = false
  countIsStopped()
}

export function decreaseFiveMinutes(){
  
  stade.btnDecreaseFiveMinutes = true
  stade.btnAddFiveMinutes = false
  countIsStopped()
}

export function soundPlay(audio){

  const newAudio = audio
  let currentSound = ''

  if(stade.currentAudio != null){
    stade.currentAudio.pause()
  }

  if(newAudio == 'forestSound'){
    currentSound = sound.forestSound
    currentSound.play()

  } else if(newAudio == 'rainSound'){
    currentSound = sound.rainSound
    currentSound.play()

  } else if(newAudio == 'coffeShopSound'){
    currentSound = sound.coffeShopSound
    currentSound.play()

  } else if(newAudio == 'fireplaceSound'){
    currentSound = sound.fireplaceSound
    currentSound.play()

  }

  stade.currentAudio = currentSound
}

function countIsStopped(){
  
  if(stade.isRunning){
    return
  }

  if(!stade.isRunning){

    let minutes = Number(el.minutes.textContent)
    setMinutes(minutes, stade.seconds, stade.thousandths)
  }

}

export function setMinutes(minutes, seconds, thousandths){

  if(stade.btnDecreaseFiveMinutes && (minutes - 5) >= 0){
    stade.btnDecreaseFiveMinutes = false
    minutes -= 5
  } 

  if(stade.btnAddFiveMinutes && (minutes + 5) <= 60){
    minutes += 5
    stade.btnAddFiveMinutes = false

    if(minutes == 60){
      seconds = 0
      thousandths = 59
      timer.displayUpdate(minutes, seconds, thousandths)
      return
    }
  }

  timer.displayUpdate(minutes, seconds, thousandths)
}
