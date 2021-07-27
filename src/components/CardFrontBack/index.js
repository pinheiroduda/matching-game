import './style.css'
import CardGame from '../CardGame'


function CardFrontBack() {
  window.CardFrontBack = {}
  window.CardFrontBack.handleClick = () => {
    console.log('Foi')
  }
  return `
    <article class="card-front-back" onClick="CardFrontBack.handleClick()">
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
