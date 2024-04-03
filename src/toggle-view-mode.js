import { stade } from "./focusTimer/stade.js"

const btnToggleViewMode = document.querySelector('#toggle-view-mode')
const iconViewMode = btnToggleViewMode.querySelectorAll('.ph-bold')


btnToggleViewMode.addEventListener('click', () => {
  document.documentElement.classList.toggle('dark')

  const mode =  stade.lightMode? "Light" : "Dark"

  event.currentTarget.querySelector('span').textContent = `${mode} mode desativado!`
 
  iconViewMode[0].classList.toggle('hiden')
  iconViewMode[1].classList.toggle('hiden')

  stade.lightMode = !stade.lightMode
  
})