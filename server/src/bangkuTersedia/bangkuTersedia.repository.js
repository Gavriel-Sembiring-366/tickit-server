import prisma from "../config/db.config.js"

const findBangkuTersediaByIdDb = async (bangkuTersediaId) => {
    const bangkuTersedia = await prisma.bangkuTersedia.findUnique({
        where: {bangkuTersedia_id : bangkuTersediaId }
    })

    return bangkuTersedia
}


const addBangkuTersediaDb = async (bangkuTersediaData) => {
    const bangkuTersedia = await prisma.bangkuTersedia.create({
        data: {
            nama_bangkuTersedia: bangkuTersediaData.nama_bangkuTersedia,
            alamat: bangkuTersediaData.alamat,  
            kapasitas: bangkuTersediaData.kapasitas
        }
    })

    return bangkuTersedia
}

const findBangkuTersediaListByJadwalDb = async (jadwal_id) => {
    const bangkuTersedia_list = await prisma.bangkuTersedia.findMany({
        where: {
            jadwal_id: {
                contains: jadwal_id
            }
        }
    });

    return bangkuTersedia_list;
};

const getAllBangkuTersediaDB = async ()=>{
    const bangkuTersedia_list = await prisma.bangkuTersedia.findMany();
    return bangkuTersedia_list
}

export{ 
    findBangkuTersediaByIdDb,
    addBangkuTersediaDb,
    findBangkuTersediaListByJadwalDb,
    getAllBangkuTersediaDB,
}