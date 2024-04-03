import * as events from "./events.js"
import { stade } from "./stade.js"
import { displayUpdate } from "./timer.js"

export function start(minutes, seconds, thousandths){
  
  stade.minutes = minutes
  stade.seconds = seconds
  stade.thousandths = thousandths

  events.registerControls()
  events.backgroundSound()
  displayUpdate()
}

