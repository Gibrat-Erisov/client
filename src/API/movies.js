import instance from './instance'

export const movies = {

    getMovies(){
        return instance.get(`movies`)
            .then(response => response.data)
    }
}