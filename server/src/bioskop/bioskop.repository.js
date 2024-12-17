import prisma from "../config/db.config.js"

const findBioskopByIdDb = async (bioskopId) => {
    const bioskop = await prisma.bioskop.findUnique({
        where: {bioskop_id : bioskopId }
    })

    return bioskop
}


const addBioskopDb = async (bioskopData) => {
    const bioskop = await prisma.bioskop.create({
        data: {
            nama_bioskop: bioskopData.nama_bioskop,
            alamat: bioskopData.alamat,  
            kapasitas: bioskopData.kapasitas
        }
    })

    return bioskop
}

const findBioskopListByNamaDb = async (nama_bioskop) => {
    const bioskop_list = await prisma.bioskop.findMany({
        where: {
            nama_bioskop: {
                contains: nama_bioskop,
                mode: "insensitive"
            }
        }
    });

    return bioskop_list;
};

const getAllBioskopDB = async ()=>{
    const bioskop_list = await prisma.bioskop.findMany();
    return bioskop_list
}

export{ 
    findBioskopByIdDb,
    addBioskopDb,
    findBioskopListByNamaDb,
    getAllBioskopDB,
}