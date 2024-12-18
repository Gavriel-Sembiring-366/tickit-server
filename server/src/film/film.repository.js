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
            genre_film: filmData.genre_film,  
            durasi: filmData.durasi,
            sinopsis: filmData.sinopsis,
            sutradara: filmData.sutradara,
            tahun_rilis: filmData.tahun_rilis,
            umur_rating: filmData.umur_rating,
            status_film: filmData.status_film
        }
    })

    return film
}

const findFilmByJudulDb = async (judul) => {
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


const getAllFilmDB = async ()=>{
    const films = await prisma.film.findMany();
    return films
}

const getFilmsByStatusDB = async (status)=>{
    const films = await prisma.film.findMany({
        where: {
            status_film: {
                contains: status,
                mode: "insensitive"
            }
        }
    });

    return films;
}

export{ 
    findFilmByIdDb,
    addFilmDb,
    findFilmByJudulDb,
    getAllFilmDB,
    getFilmsByStatusDB,
}