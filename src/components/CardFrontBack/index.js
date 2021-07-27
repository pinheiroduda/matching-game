import './style.css'
import CardGame from '../CardGame'


function CardFrontBack() {
  window.cardFrontBack = {}
  window.cardFrontBack.handleClick = (event) => {
    const $origin = event.target
    const $cardFrontBack = $origin.parentNode.parentNode.parentNode

    $cardFrontBack.classList.add('-active')
  }
  return `
    <article class="card-front-back" onClick="cardFrontBack.handleClick(event)">
      <div class="card -front">
        ${CardGame()}
      </div>
      <div class="card -back">
        ${CardGame('javascript', 'Logo do JavaScript')}
      </div>
    </article>
  `
}

export default CardFrontBack
