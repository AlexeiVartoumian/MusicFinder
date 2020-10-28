const deezer = new Deezer;
const ui = new UI;
// remember to include axios as a cdn to get this working


const searchUser = document.getElementById('searchUser');
const button = document.getElementById('submit');
/*const API_KEY = 'e0be4c1120msh0e082da79491ae3p1c1f8ejsn0ad66ddc8dbf';



const request = axios.create({
    baseURL : 'https://deezerdevs-deezer.p.rapidapi.com/search/artist?q=',
    timeout : 30000,
    headers :  {'x-rapidapi-key': API_KEY}

});

function getArtist( artist ){
    const anArtist = request.get(`${artist}`)
    .then(response => response.data.data[0])
    .catch(error => console.log(error));

    return anArtist
}
*/


setTimeout(function (){
    searchUser.addEventListener('keyup', (e) => {
        const userText = e.target.value;
    
        if(!userText== ''){
            console.log(userText)
    
            //Make HTTP Call
            
            deezer.getArtist(userText).then(data=> {
                console.log(data);  
                //console.log(data.name);
                //console.log(data.nb_album)
                //console.log(data.picture_small)
                 return ui.showProfile(data)
            })

            
            deezer.getTracks(userText).then(data => {
                console.log(data)
                //console.log(data[0].title)
                return ui.showTracks(data)
            })
            
            
        } else{
            // clear profile
        }
    });
},4000)
    




