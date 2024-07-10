import './home.css'
import Card from './Card'
import plants from '../plants.json'
export default function Home(){
  return(
    <>
     
      <div className="showProducts">
        <div className='display'>
          {plants.plants.map((plant , index)=>(
              <Card price={plant.price} index={index} name={plant.name} description={plant.description} photoUrl={plant.photoUrl} />
          ))}

        </div>

      </div>
    
    </>
  )
}