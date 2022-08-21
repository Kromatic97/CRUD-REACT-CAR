import React from 'react'
import axios from 'axios'


const Car = ({car, getAllCars,setUpdateInfo}) => {

//DELETE//
const deleteCardById = id => {
    const URL = `https://cars-crud.herokuapp.com/cars/${id}/`
    axios.delete(URL)
    .then(res => {
        console.log(res.data)
        getAllCars()
    })
    .catch(err => console.log(err))
    
}

const getInfoUpdate = () => {
  setUpdateInfo(car)
}

  return (
    <article>
    <h2>{`#${car.id} ${car.brand}`}</h2>
    <p><span><b>Modelo:</b> </span>{`${car.model}`}</p>
    <p><span><b>Color:</b> </span>{`${car.color}`}</p>
    <p><span><b>Year:</b> </span>{`${car.year}`}</p>
    <h3>Price: <span>{car.price}</span></h3>
    <button onClick={() => deleteCardById(car.id)} 
     className='btn-delete'
    >Delete this Car</button>
    <button onClick={getInfoUpdate}className='btn-update'>Update this Car</button>

    </article>
  )
}

export default Car