
const API_KEY = 'e0be4c1120msh0e082da79491ae3p1c1f8ejsn0ad66ddc8dbf';



const request = axios.create({
    baseURL : 'https://deezerdevs-deezer.p.rapidapi.com',
    timeout : 30000,
    headers :  {'x-rapidapi-key': API_KEY}

});

///search/artist?q=

class Deezer {
    
     getArtist( artist ){
        const anArtist = request.get(`/search/artist?q=${artist}`)
        .then(response => response.data.data[0])
        //.then(data => data.tracklist)
        .catch(error => console.log(error));
    
        return anArtist
    }

    getTracks (tracks){
        let id ;
        const tracklist = request.get(`/search/artist?q=${tracks}`)
        .then((response) => {
            id= response.data.data[0].id
            return request.get(`/artist/${id}/top?limit=50`)
        }).then((response) => {
           let whatIwant = response.data.data
           return whatIwant
        })

        
        //.then(request.get(`/artist/${id}/top?limit=50`))
        //.then(response => response )
        .catch(error => console.log(error))

        return tracklist

    }
    //showProfile
}
