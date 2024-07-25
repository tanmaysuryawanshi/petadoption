import { Pet } from "./Pet";
const Result =({pets})=>{
    return (<div className='search'>
        {!pets.length ? (<h5>No Pets Found</h5>):
        (pets.map(pet=>(<Pet key={pet.id}
        name={pet.name}
        id={pet.id}
        />)))}
    </div>)
}

export default Result;