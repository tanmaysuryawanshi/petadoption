const fetchPet=async({
    queryKey
})=>{
    const id=queryKey[1];
    const apiRes=await fetch(`http://pets-v2.dev-apis.com/pets?id=${id}`);
    if(apiRes.Error)
    if(!apiRes.ok){
        return res.json({message:`details/${id} fetch not ok`})
    }
   // console.log("fetched"+apiRes.json())
    return apiRes.json();
}

export default fetchPet;