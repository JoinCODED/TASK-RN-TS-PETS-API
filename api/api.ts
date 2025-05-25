import axios from "axios";

const Pets_url = "https://pets-react-query-backend.eapi.joincoded.com";
interface NewPets {
  name: string;
  image: string;
  type: string;
  adopted: boolean;
}
const fetchAllPets = async () => {
  const response = await axios.get(`${Pets_url}/pets`);
  return response.data;
};
// const instance = axios.get(`${FetchAllPets_url}/pets`);
// console.log(instance);
const fetchOnePet = async (id: number) => {
  const response = await axios.get(`${Pets_url}/pets/${id}`);
  return response.data;
};

const addPetsPost = async (data: NewPets) => {
  try {
    const response = await axios.post(`${Pets_url}/pets`, data);
    // return response.data;
  } catch (error) {
    console.error("Error posting data:", error);
  }
};

export { fetchAllPets, fetchOnePet, addPetsPost };
