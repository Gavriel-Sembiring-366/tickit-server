import findFilmsByJudulDb from "./film.repository.js"
import addFilmDb from "./film.repository.js"

const getFilmDataByJudul = async (judul) => {
    const filmData = await findFilmsByJudulDb(judul)
    return filmData
}


const addFilm = async (filmData) => {
    await addFilmDb(filmData)
}
export default { getFilmDataByJudul, addFilm}