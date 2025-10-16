import { useEffect, useState } from 'react'
import axios from "axios"

export default function AppMainActress() {

    const [actressesList, setActressesList] = useState([]);

    function fetchDataActresses() {
        axios.get('https://lanciweb.github.io/demo/api/actresses')
            .then(res => {
                const actress_list = res.data;
                setActressesList(actress_list)
                console.log(actress_list)
            })
            .catch(err => console.error(err));

    }

    useEffect(fetchDataActresses, []);

    return (
        <>
            <div className='row g-3 m-3'>
                {
                    actressesList.map(actress =>
                        <div key={actress.id} className="col-12 col-sm-6 col-md-4 col-lg-3">
                            <div className='card h-100 bg-danger bg-opacity-25'>
                                <img src={actress.image} alt={actress.name} className="card-img-top p-3" style={{ height: "500px", objectFit: "contain" }} />
                                <div className="card-body text-center">
                                    <h3 className="cart-title"> {actress.name}</h3>
                                </div>
                                <div className=''>
                                    <ul className='lh-lg'>
                                        <li><b>Birth Year: </b>{actress.birth_year}</li>
                                        <li> <b>Nationality: </b> {actress.nationality}</li>
                                        <li> <b>Biography: </b>{actress.biography} </li>
                                        <li> <b>Awards: </b>{actress.awards} </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    )
                }
            </div>
        </>
    )
}