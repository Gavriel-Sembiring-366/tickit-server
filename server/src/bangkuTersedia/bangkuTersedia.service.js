import { findBangkuTersediaListByJadwalDb, addBangkuTersediaDb, getAllBangkuTersediaDB } from "./bangkuTersedia.repository.js";

const getBangkuTersediaDataByJadwal = async (judul) => {
    const bangkuTersediaData = await findBangkuTersediaListByJadwalDb(judul)
    return bangkuTersediaData
}

const addBangkuTersedia = async (bangkuTersediaData) => {
    await addBangkuTersediaDb(bangkuTersediaData)
}

const getAllBangkuTersedia = async()=>{
    const bangkuTersedia_list = await getAllBangkuTersediaDB()
    return bangkuTersedia_list
}
export { getBangkuTersediaDataByJadwal, addBangkuTersedia, getAllBangkuTersedia}