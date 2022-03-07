import * as  axios from "axios";

const instance = axios.create({
    baseURL: "https://api.datamuse.com/",
    headers: {}
})

export const testAPI = {
    getWords(word) {
        return instance.get(`words?rel_rhy=${word}`)
            .then(response => {
                return response.data
            })
    },
}