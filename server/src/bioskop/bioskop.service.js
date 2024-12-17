import { addBioskopDb, getAllBioskopDB } from "./bioskop.repository.js";

const getBioskopDataByNama = async (judul) => {
    const bioskopData = await findBioskopListByNamaDb(judul)
    return bioskopData
}

const addBioskop = async (bioskopData) => {
    await addBioskopDb(bioskopData)
}

const getAllBioskop = async()=>{
    const bioskop_list = await getAllBioskopDB()
    return bioskop_list
}
export { getBioskopDataByNama, addBioskop, getAllBioskop}