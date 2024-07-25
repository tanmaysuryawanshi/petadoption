const fetchBreedList = async ({ queryKey }) => {
  const animal = await queryKey[1];
  console.log(animal);
  const apiRes = await fetch(
    `http://pets-v2.dev-apis.com/breeds?animal=${animal}`
  );


    if (!apiRes.ok) {
   //   console.log(apiRes.json());
      return apiRes.json({ message: `details/${animal} fetch not ok` });
    }
  // console.log("fetched"+apiRes.json())
  return apiRes.json();
};

export default fetchBreedList;
