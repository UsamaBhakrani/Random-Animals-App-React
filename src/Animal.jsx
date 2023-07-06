import { useState } from 'react';
import AnimalShow from './AnimalShow'
import './Animals.css'

const getRandomAnimal = () => {
  const animals = ['bird','cat','cow','dog','gator','horse']
  return animals[Math.floor(Math.random()* animals.length)]
}

const Animal = () => {

    const [animals,setAnimals]=useState([])

    const handleClick = () => {
        setAnimals([...animals,getRandomAnimal()])
    }

    const renderedAnimals = animals.map((ani,index) => {
      return <AnimalShow type={ani} key={index}/>
    })

  return (
    <div className='app'>
    <button onClick={handleClick}>Show Animal</button>
    <div>Name of Animal : </div>
    <div className='animal-list'>{renderedAnimals}</div>
  </div>
  )
}

export default Animal