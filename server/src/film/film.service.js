import { findFilmByJudulDb, addFilmDb, getAllFilmDB, getFilmsByGenreDB } from "./film.repository.js";

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

const getFilmsByGenre = async (judul) => {
    const filmData = await getFilmsByGenreDB(judul)
    return filmData
}

export { getFilmDataByJudul, addFilm, getAllFilm, getFilmsByGenre}