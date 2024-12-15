import { findFilmByJudulDb, addFilmDb, getAllFilmDB } from "./film.repository.js";

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
export { getFilmDataByJudul, addFilm, getAllFilm}