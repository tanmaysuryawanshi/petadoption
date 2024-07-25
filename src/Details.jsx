import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { useState } from "react";
import fetchPet from "./fetchPets";
import Carousel from "./Carousel";
import ErrorBoundary from "./ErrorBoundary";

import Modal from "./Modal";
const Details = () => {
    const [showModal,setShowModal]=useState(false);
    const { id } = useParams();
    const { data, isLoading, isError, error } = useQuery(["details", id], fetchPet);

    if (isLoading) {
        return (
            <div className="loading-pane">
                <h2 className="loader">Loading...</h2>
            </div>
        );
    }
    // console.log(data);

    if (isError) {
        console.log(error.message);
        return (
            <div>
                <h1>Error: {error.message}</h1>
            </div>
        );
    }
    console.log(data);

    // Check if results.data and results.data.pets are defined
    if (!data) {
        return (
            <div>
                <h1>No pet data found for ID: {id}</h1>
            </div>
        );
    }

    const pet = data.pets[0];
    console.log("inside details" + pet.images);
    return (
        <div className="details">
            <Carousel images={pet.images} />
            <div>
                <h1>{pet.name}</h1>
                <p>{pet.breed} &mid {pet.city}</p>
                {
                    showModal?
                    (
                        <Modal>
                            <div>
                                <h1>Would you like to adopt {pet.name}</h1>
                                <div classNames="buttons">
                                    <button>Yes</button>
                                    <button onClick={()=>(setShowModal(false))}>No</button>
                                </div>
                            </div>
                        </Modal>
                    ):
                   null
                }
                <button onClick={()=>setShowModal(true)}>
                    Adopt {pet.name}
                </button>
            </div>
        </div>
    );
};
function DetailsErrorBoundary(props) {
    return (
        <ErrorBoundary>
            <Details {...props}/>
        </ErrorBoundary>
    )
}
export default DetailsErrorBoundary;
