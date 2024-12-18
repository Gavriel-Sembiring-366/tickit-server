import prisma from "../config/db.config.js";

const addJadwal = async (jadwalData) => {
    try {
        const jadwal = await prisma.jadwal.create({
            data: {
                film_id: jadwalData.film_id,
                bioskop_id: jadwalData.bioskop_id,
                waktu_tayang: jadwalData.waktu_tayang,
            },
        });
        return jadwal;
    } catch (err) {
        throw new Error(`Error adding jadwal: ${err.message}`);
    }
};

const getAllJadwal = async () => {
    try {
        const jadwalData = await prisma.jadwal.findMany();
        return jadwalData;
    } catch (err) {
        throw new Error(`Error fetching all jadwal: ${err.message}`);
    }
};

const getJadwalByFilmId = async (filmId) => {
    try {
        const jadwalData = await prisma.jadwal.findMany({
            where: {
                film_id: {
                    contains: filmId,
                    mode: "insensitive",
                },
            },
        });
        return jadwalData;
    } catch (err) {
        throw new Error(`Error fetching jadwal by film ID ${filmId}: ${err.message}`);
    }
};

const findJadwalById = async (jadwalId) => {
    try {
        const jadwal = await prisma.jadwal.findUnique({
            where: { jadwal_id: jadwalId },
        });
        return jadwal;
    } catch (err) {
        throw new Error(`Error fetching jadwal by ID ${jadwalId}: ${err.message}`);
    }
};

export { addJadwal, getAllJadwal, getJadwalByFilmId, findJadwalById };
