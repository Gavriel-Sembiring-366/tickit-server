import { findFilmByJudulDb, addFilmDb, getAllFilmDB, getFilmsByStatusDB } from "./film.repository.js";

const getFilmDataByJudul = async (judul) => {
    const filmData = await findFilmByJudulDb(judul)
    return filmData
}

const addFilm = async (filmData) => {
    await addFilmDb(filmData)
}

const getAllFilm = async()=>{
    const films = await getAllFilmDB()
    return films
}

const getFilmsByStatus = async (status) => {
    const filmData = await getFilmsByStatusDB(status)
    return filmData
}

export { getFilmDataByJudul, addFilm, getAllFilm, getFilmsByStatus}