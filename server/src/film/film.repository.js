import prisma from "../config/db.config.js"

const findFilmByIdDb = async (filmId) => {
    const film = await prisma.film.findUnique({
        where: {film_id : filmId }
    })

    return film
}


const addFilmDb = async (filmData) => {
    const film = await prisma.film.create({
        data: {
            judul: filmData.judul,
            genre: filmData.genre,  
            durasi: filmData.durasi,
            sinopsis: filmData.sinopsis,
            sutradara: filmData.sutradara,
            tahun_rilis: filmData.tahun_rilis,
            umur_rating: filmData.umur_rating
        }
    })

    return film
}

const findFilmsByJudulDb = async (judul) => {
    const films = await prisma.film.findMany({
        where: {
            judul: {
                contains: judul,
                mode: "insensitive"
            }
        }
    });

    return films;
};

export default{ 
    findFilmByIdDb,
    addFilmDb,
    findFilmsByJudulDb,
}