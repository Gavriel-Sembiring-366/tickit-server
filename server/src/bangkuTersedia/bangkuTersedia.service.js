import prisma from "../config/db.config.js";

const getBangkuTersediaDataByJadwal = async (jadwalId) => {
  const bangkuTersediaData = await prisma.bangkuTersedia.findMany({
    where: { jadwal_id: { contains: jadwalId } }
  });
  return bangkuTersediaData;
};

const addBangkuTersedia = async (bangkuTersediaData) => {
  await prisma.bangkuTersedia.create({
    data: {
      nama_bangkuTersedia: bangkuTersediaData.nama_bangkuTersedia,
      alamat: bangkuTersediaData.alamat,
      kapasitas: bangkuTersediaData.kapasitas
    }
  });
};

const getAllBangkuTersedia = async () => {
  const bangkuTersediaList = await prisma.bangkuTersedia.findMany();
  return bangkuTersediaList;
};

const deleteBangkuTersediaById = async (bangkuTersediaId) => {
  await prisma.bangkuTersedia.delete({
    where: { bangku_tersedia_id: bangkuTersediaId }
  });
};

export {
  getBangkuTersediaDataByJadwal,
  addBangkuTersedia,
  getAllBangkuTersedia,
  deleteBangkuTersediaById
};
