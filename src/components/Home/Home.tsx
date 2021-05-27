import {useContext} from 'react'
import {MainContext} from '../../context/MainContext'
import './styles.scss'
import Card from '../Card/Card';
import {Link} from "react-router-dom"

const Home = (): JSX.Element => {
  const {images, main} = useContext(MainContext)
  const urlS = 'https://pokeapi.co/api/v2/pokemon/'

  return (
    <div className='home'>
      {
        images && main?.pokemons?.map((pokemon, index) => {
          console.log(images);
          return (
            <Link to={`/item/${pokemon.name}`} key={index}>
              <Card
                name={pokemon.name}
                // @ts-ignore
                img={images?.images[pokemon.name]}
                // click={main.getItem}
                arg={`${urlS}${index + 1}`}
              />
            </Link>
          )
        })
      }
    </div>
  )
}

export default Home
