import prisma from "../config/db.config.js"

export const findJadwalByIdDb = async (jadwalId) => {
    const jadwal = await prisma.jadwal.findUnique({
        where: {jadwal_id : jadwalId }
    })

    return jadwal
}


export const addJadwalDb = async (jadwalData) => {
    const jadwal = await prisma.jadwal.create({
        data: {
            film_id: jadwalData.film_id,
            bioskop_id: jadwalData.bioskop_id,  
            waktu_tayang: jadwalData.waktu_tayang
        }
    })

    return jadwal
}

export const getJadwalListByFilmIdDb = async (filmId) => {
    const jadwalData = await prisma.jadwal.findMany({
        where: {
            film_id: {
                contains: filmId,
                mode: "insensitive"
            }
        }
    });

    return jadwalData;
};

export const getAllJadwalDB = async ()=>{
    const jadwal_list = await prisma.jadwal.findMany();
    return jadwal_list
}
