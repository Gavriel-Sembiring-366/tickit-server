import { findJadwalListByJudulDb, addJadwalDb, getAllJadwalDB} from "./jadwal.repository.js";
import prisma from "../config/db.config.js"

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

export const getJadwalByFilmId = async(filmId) => {

    try{
        const jadwalData = await prisma.jadwal.findMany({
            where: {
                film_id: {
                    contains: filmId,
                    mode: "insensitive"
                }
            }
        });
        return jadwalData;
    } catch (err) {
        throw new Error(`Error jadwal by film ID ${filmId}: ${err.message}`)
    };
};
export { getJadwalDataByJudul, addJadwal, getAllJadwal}