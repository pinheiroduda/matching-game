import './src/styles/settings/colors.css'
import './src/styles/generic/reset.css'
import './src/styles/elements/base.css'

import ScoreBoard from './src/Objects/ScoreBoard'
import BoardGame from './src/Objects/BoardGame'

const $root = document.querySelector('#root')

$root.insertAdjacentHTML(
  'beforeend',
  `
  ${ScoreBoard()}
  ${BoardGame(6)}
  `
)
