import { findFilmByJudulDb, addFilmDb, getAllFilmDB, getFilmsByStatusDB } from "./film.repository.js";
import prisma from "../config/db.config.js"

export const getFilmDataByJudul = async (judul) => {
    const filmData = await findFilmByJudulDb(judul)
    return filmData
}

export const addFilm = async (filmData) => {
    await addFilmDb(filmData)
}

export const getAllFilm = async()=>{
    const films = await getAllFilmDB()
    return films
}

export const getFilmsByStatus = async (status) => {
    const filmData = await getFilmsByStatusDB(status)
    return filmData
}

export const getFilmById = async (filmId) => {
    try {
        const film = await prisma.film.findUnique({
            where: { film_id: filmId },
        });
        return film;
    } catch (err) {
        throw new Error(`Error fetching film with ID ${filmId}: ${err.message}`);
    }
};