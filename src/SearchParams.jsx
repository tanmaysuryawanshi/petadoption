import { useState } from "react"
import { Pet } from "./Pet";
import useBreedList from "./useBreedList";
import { useQuery } from "@tanstack/react-query";
import fetchSearch from "./fetchSearch";
const ANIMALS = ["bird", "cat", "dog", "rabbit"];

export const SearchParams = () => {
    const [requestParams, setRequestParams] = useState({
        location: "",
        animal: "",
        breed: ""
    })
    const [animal, setAnimal] = useState("");

    const [breeds] = useBreedList(animal);
    const results = useQuery(["search", requestParams], fetchSearch);
    const pets = results?.data?.pets ?? [];



    return (
        <div className="search-params">

            <form
                onSubmit={(e) => {
                    e.preventDefault();
                    const formData = new FormData(e.target);
                    const obj = {
                        animal: formData.get("animal") ?? "",
                        breed: formData.get("breed") ?? "",
                        location: formData.get("location") ?? "",
                    };
                    console.log(obj);
                    setRequestParams(obj);
                }}
            >
                <label htmlFor="Location">
                    Location
                    <input id="location"
                        name="location"

                        placeholder="location" />
                </label>
                <label htmlFor="Animal">
                    Animal
                    <select
                        id="animal"
                        name="animal"
                        value={animal}
                        onBlur={(e) => {
                            setAnimal(e.target.value);
                        }}
                 >

                        {ANIMALS.map((animal) => (
                            <option key={animal}>{animal}</option>
                        ))}

                    </select>
                </label>

                <label htmlFor="breed">
                    Breed
                    <select
                        disabled={!breeds.length}
                        id="breed"
                        name="breed">
                        {breeds.map((it) => (
                            <option key={it} value={it}>{it}</option>
                        ))}

                    </select>
                </label>

                <button>Submit</button>

            </form>

            {pets.map(it => (
                <Pet key={it.id} name={it.name}
                    id={it.id}
                    image={it.image}
                    location={it.location}
                    breed={it.breed} />
            ))}
        </div>
    )
}