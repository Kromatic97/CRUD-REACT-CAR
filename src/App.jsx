import axios from 'axios'
import { useEffect, useState, } from 'react'
import './App.css'
import Car from './components/Car'
import HookForm from './components/HookForm'


function App() {

   //llamada a la API axios- useEffect - useState//

  const [cars, setCars] = useState()
  const [updateInfo, setUpdateInfo] = useState()

  //Recarga la pagina una vez realizado el POST sin necesidad de refrescar//
  const getAllCars = () =>{
    const URL = 'https://cars-crud.herokuapp.com/cars/'
    axios.get(URL)
      .then(res => setCars(res.data))
      .catch(err => console.log(err))
  }


  useEffect(() => {
    getAllCars()
  }, [])

  


//CREATE NEW CAR -- funcion para Crear Nuevo Car//
const createNewCar = data => {
  const URL = 'https://cars-crud.herokuapp.com/cars/'

  axios.post(URL, data)
  .then(res => 
    {console.log(res.data)
    getAllCars()
    })
  .catch(err => console.log(err))
  
}



  return (
    <div className="App">
       <h1>CRUD Cars</h1>  
       <hr></hr>
       <HookForm 
       createNewCar={createNewCar}
       updateInfo={updateInfo}
       getAllCars={getAllCars}
       setUpdateInfo={setUpdateInfo}/>
       
       {/* <img src="/img/fotografia.jpg" alt="" /> */}

       <div className='container'>
        {
          cars?.map(car =>(
            <Car 
              key={car.id}
              car={car}
              getAllCars={getAllCars}
              setUpdateInfo={setUpdateInfo}
              
           />
          ))
        }
       </div>
    </div>
  )
}

export default App
