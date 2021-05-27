import './styles.scss';
import {CardProps} from "./Card.props";

const Card = ({arg, click, img, name}: CardProps):JSX.Element => {

  return (
    <div className='card'
         onClick={() => typeof click === 'function' ? click(arg) : null}
    >
      <div className='cardImg'>
        <img src={img} alt={img}/>
      </div>
      <div className='cardName'>
        <h2>{name}</h2>
      </div>
    </div>
  )
}

export default Card
