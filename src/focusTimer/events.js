import * as el from "./elements.js"
import * as actions from "./actions.js"

export function registerControls(){
  el.controls.addEventListener('click', (event) => {
    const action = event.target.dataset.action

    if(typeof actions[action] != "function"){
      return
    }

    actions[action]()
  })

}

export function backgroundSound(){
  el.backgroundSound.addEventListener('click', (event) => {
    const action = event.target.dataset.action
    const isButton = event.target.tagName

  if(isButton != "BUTTON"){
    return
  }

  actions.soundPlay(action)
  })
  
}


