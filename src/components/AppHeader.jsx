import { useState } from "react"
import AppMainActors from "./AppMainActors";
import AppMainActresses from "./AppMainActresses";

export default function Appheader() {
    const [list, setList] = useState(null);

    function handleActorsClick() {
        setList("actors");
    }

    function handleActressesClick() {
        setList("actresses");
    }

    return (
        <>
            <header className='text-center bg-success p-3 h-100 mb-2'>
                <h1>Actors list (React-API)</h1>
                <button className="btn btn-primary m-3" onClick={handleActorsClick} >Actors</button>
                <button className="btn btn-primary m-3" onClick={handleActressesClick}>Actresses</button>
            </header>
            {list === "actors" && <AppMainActors />}
            {list === "actresses" && <AppMainActresses />}
        </>

    )
}