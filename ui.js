class UI {
    constructor(){
        this.profile = document.getElementById('profile');
        this.tracks = document.getElementById('tracks');
    }
    
     showProfile(display){
        /*
          this.profile.innerHTML = 
        `
            <div class="card card-body mb-3">
                <div class="row">
                    <div class="col-md-3>
                    <img class = "img-fluid mb-2" src="${display.picture_small}"></img>
                    
                    
                      
                        
                    </div>
                    <div class="col-md-9>

                    
                    </div>
                </div>
            </div>
        `
        */
       this.profile.innerHTML = `
       <p>You searched for : ${display.name}</p>
       <img class = "img-fluid mb-2" src="${display.picture_medium}"></img>
       <p>Number of albums : ${display.nb_album}</p>`
    }
    
     showTracks(display){
        this.tracks.innerHTML =`
        <p>1. ${display[0].title}</p>
        <img src="${display[0].album.cover_medium}">
        <audio controls>
        <source src="${display[0].preview}" type="audio/mp3">
        </audio>
        <p>2. ${display[1].title}</p>
        <img src="${display[1].album.cover_medium}">
        <audio controls>
        <source src="${display[1].preview}" type="audio/mp3">
        </audio>
        <p>3. ${display[2].title}</p>
        <img src="${display[2].album.cover_medium}">
        <audio controls>
        <source src="${display[2].preview}" type="audio/mp3">
        </audio>
        <p>4. ${display[3].title}</p>
        <img src="${display[3].album.cover_medium}">
        <audio controls>
        <source src="${display[3].preview}" type="audio/mp3">
        </audio>
        <p>5. ${display[4].title}</p>
        <img src="${display[4].album.cover_medium}">
        <audio controls>
        <source src="${display[4].preview}" type="audio/mp3">
        </audio>
        <p>6. ${display[5].title}</p>
        <img src="${display[5].album.cover_medium}">
        <audio controls>
        <source src="${display[5].preview}" type="audio/mp3">
        </audio>
        `
    }
    
}

/*

                    
*/

