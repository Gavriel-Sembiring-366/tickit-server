import { findBioskopListByJudulDb, addBioskopDb, getAllBioskopDB } from "./bioskop.repository.js";

const getBioskopDataByJudul = async (judul) => {
    const bioskopData = await findBioskopListByJudulDb(judul)
    return bioskopData
}

const addBioskop = async (bioskopData) => {
    await addBioskopDb(bioskopData)
}

const getAllBioskop = async()=>{
    const bioskop_list = await getAllBioskopDB()
    return bioskop_list
}
export { getBioskopDataByJudul, addBioskop, getAllBioskop}