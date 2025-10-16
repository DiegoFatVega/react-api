import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import axios from "axios"


function App() {
  const [actorsList, setActorsList] = useState([]);

  function fetchData() {
    axios.get('https://lanciweb.github.io/demo/api/actors')
      .then(res => {
        const list = res.data;
        setActorsList(list)
        console.log(list)
      })
      .catch(err => console.error(err));

  }

  useEffect(fetchData, []);

  return (
    <>
      <header className='text-center bg-success p-5 h-100'>
        <h1>Actors list (React-API)</h1>
      </header>
      <main>
        <div className='container-fluid mt-5'>
          <div className='row g-4'>
            {
              actorsList.map(actor =>
                <div key={actor.id} className="col-12 col-sm-6 col-md-4 col-lg-3">
                  <div className='card h-100 bg-info bg-opacity-25'>
                    <img src={actor.image} alt={actor.name} className="card-img-top p-3" style={{ height: "500px", objectFit: "contain" }} />
                    <div className="card-body text-center">
                      <h3 className="cart-title"> {actor.name}</h3>
                    </div>
                    <div className='text-decoration-none'>
                      <ul className='text-decoration-none'>
                        <li className='text-decoration-none'><b>Birth Year: </b>{actor.birth_year}</li>
                        <li> <b>Nationality: </b> {actor.nationality}</li>
                        <li> <b>Biography: </b>{actor.biography} </li>
                        <li> <b>Awards: </b>{actor.awards} </li>
                      </ul>
                    </div>
                  </div>
                </div>
              )
            }
          </div>
        </div>
      </main>
      <footer></footer>
    </>
  )
}

export default App
