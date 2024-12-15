import prisma from "../config/db.config.js"

const findJadwalByIdDb = async (jadwalId) => {
    const jadwal = await prisma.jadwal.findUnique({
        where: {jadwal_id : jadwalId }
    })

    return jadwal
}


const addJadwalDb = async (jadwalData) => {
    const jadwal = await prisma.jadwal.create({
        data: {
            film_id: jadwalData.film_id,
            bioskop_id: jadwalData.bioskop_id,  
            waktu_tayang: jadwalData.waktu_tayang
        }
    })

    return jadwal
}

const findJadwalListByJudulDb = async (nama_jadwal) => {
    const jadwal_list = await prisma.jadwal.findMany({
        where: {
            nama_jadwal: {
                contains: nama_jadwal,
                mode: "insensitive"
            }
        }
    });

    return jadwal_list;
};

const getAllJadwalDB = async ()=>{
    const jadwal_list = await prisma.jadwal.findMany();
    return jadwal_list
}

export{ 
    findJadwalByIdDb,
    addJadwalDb,
    findJadwalListByJudulDb,
    getAllJadwalDB,
}