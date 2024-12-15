import { findJadwalListByJudulDb, addJadwalDb, getAllJadwalDB } from "./jadwal.repository.js";

const getJadwalDataByJudul = async (judul) => {
    const jadwalData = await findJadwalListByJudulDb(judul)
    return jadwalData
}

const addJadwal = async (jadwalData) => {
    await addJadwalDb(jadwalData)
}

const getAllJadwal = async()=>{
    const jadwal_list = await getAllJadwalDB()
    return jadwal_list
}
export { getJadwalDataByJudul, addJadwal, getAllJadwal}