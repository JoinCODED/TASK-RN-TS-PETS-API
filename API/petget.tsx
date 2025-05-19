import instance from "@/API/index";

const getAllPets = async () => {
  const getPetsinfo = await instance.get("/pets");
  return getPetsinfo.data;
};

const getOnePetId = async (id: string) => {
  const getPetIdv = await instance.get(`/pets/${id}`);
  return getPetIdv.data;
};

const addNewPet = async (
  name: string,
  description: string,
  type: string,
  image: string,
  adopted: boolean
) => {
  const addNewPet = await instance.post("/pets", {
    name: name,
    description: description,
    type: type,
    image: image,
    adopted: adopted,
  });
  return addNewPet.data;
};

export { getAllPets, getOnePetId, addNewPet };
