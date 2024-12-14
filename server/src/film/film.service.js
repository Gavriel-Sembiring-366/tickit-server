import { findFilmsByJudulDb, addFilmDb, getAllFilmsDB } from "./film.repository.js";

const getFilmDataByJudul = async (judul) => {
    const filmData = await findFilmsByJudulDb(judul)
    return filmData
}

const addFilm = async (filmData) => {
    await addFilmDb(filmData)
}

const getAllFilms = async()=>{
    const films = await getAllFilmsDB()
    return films
}
export { getFilmDataByJudul, addFilm, getAllFilms}