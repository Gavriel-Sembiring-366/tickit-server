import prisma from "../config/db.config.js";

const getBioskopById = async (bioskopId) => {
    try {
        const bioskopData = await prisma.bioskop.findUnique({
            where: { bioskop_id: bioskopId },
        });
        return bioskopData;
    } catch (err) {
        throw new Error(`Error fetching bioskop by ID: ${bioskopId} - ${err.message}`);
    }
};

const addBioskop = async (bioskopData) => {
    try {
        const bioskop = await prisma.bioskop.create({
            data: {
                nama_bioskop: bioskopData.nama_bioskop,
                alamat: bioskopData.alamat,
                kapasitas: bioskopData.kapasitas,
            },
        });
        return bioskop;
    } catch (err) {
        throw new Error(`Error adding bioskop: ${err.message}`);
    }
};

const getAllBioskop = async () => {
    try {
        const bioskopList = await prisma.bioskop.findMany();
        return bioskopList;
    } catch (err) {
        throw new Error(`Error fetching all bioskops: ${err.message}`);
    }
};

const findBioskopListByNama = async (nama_bioskop) => {
    try {
        const bioskopList = await prisma.bioskop.findMany({
            where: {
                nama_bioskop: {
                    contains: nama_bioskop,
                    mode: "insensitive",
                },
            },
        });
        return bioskopList;
    } catch (err) {
        throw new Error(`Error fetching bioskop by name: ${nama_bioskop} - ${err.message}`);
    }
};

export { getBioskopById, addBioskop, getAllBioskop, findBioskopListByNama };
