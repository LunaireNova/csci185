const baseURL = 'https://www.apitutor.org/spotify/simple/v1/search';

function search (ev) {
    const term = document.querySelector('#search').value;
    console.log('search for:', term);
    // issue three Spotify queries at once...
    getTracks(term);
    getAlbums(term);
    getArtist(term);
    if (ev) {
        ev.preventDefault();
    }
}

async function getTracks (term) {
    const trackEndpoint = baseURL + "?q=" + term +"&type=track";
    console.log(trackEndpoint)

    const data = await fetch(trackEndpoint).then(response => response.json());
    console.log(data);
    console.log(data[0]);
    console.log(data[0].name);
    console.log(data[0].artist.name);
    console.log(data[0].album.image_url);
    // clear out old stuff before new stuff
   document.querySelector('#tracks').innerHTML = "";

for(let i = 0; i < 5; i++){

        const template = ` <section class="track-item preview" onclick="playSong('${data[i].id}')">
        <img alt="This is an album cover for ${data[i].name}" src="${data[i].album.image_url}">
        <i class="fas fa-play play-track" aria-hidden="true"></i>
        <div class="label">
            <h2>${data[i].name}</h2>
            <p>
                ${data[i].artist.name}
            </p>
        </div>
    </section>`;

    document.querySelector('#tracks').insertAdjacentHTML('beforeend', template);
    }
};

// The Job of playSong function is to create an iframe and 
// replace the content in the #artist region withe the iframe

function playSong(id){
    const iframe = `
            <iframe style="border-radius:12px" 
            src="https://open.spotify.com/embed/track/${id}?utm_source=generator&theme=0" 
            width="100%" 
            height="352" 
            frameBorder="0" 
            allowfullscreen="" 
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
            loading="lazy"></iframe>`;

            document.querySelector('#artist').innerHTML = iframe;
}



async function getAlbums (term) {
    const albumEndpoint = baseURL + "?q=" + term +"&type=album";
    console.log(albumEndpoint)

    const data = await fetch(albumEndpoint).then(response => response.json());}
   // console.log(data);
   document.querySelector('#albums  ').innerHTML = "";

   for(let i = 0; i < 5; i++){

    const template = ` <section class="album-card" id="2lATw9ZAVp7ILQcOKPCPqp">
    <div>
        <img alt="The album cover for ${data[i].name}" src="${data[i].image_url}">
        <h2>${data[i].name}</h2>
        <div class="footer">
         <a href="${data[i].spotify_url}" target="_blank">
       view on spotify
          </a>
        </div>
    </div>
</section>
`;

    document.querySelector('#albums').insertAdjacentHTML('beforeend', template);

};

async function getArtist (term) {
    const artistEndpoint = baseURL + "?q=" + term +"&type=artist";
    //console.log(artistEndpoint)

    const data = await fetch(artistEndpoint).then(response => response.json());

    // Check if there is at least 1 element in the array:
    if (data.length === 0) {
        document.querySelector('#artist').innerHTML = "No results found.";
        return;
    }
   // console.log(data);
   // console.log(data[0].name);
    //console.log(data[0].image_url); 

    const template = `
    <sectio class="artist-card">
    <img alt="photo of ${data[0].name}" src="${data[0].image_url}" />
    <h2>${data[0].name}</h2>
    <p>Popularity: ${data[0].popularity}</p>  
    </section>  
    `
  //  console.log(template);

    document.querySelector('#artist').innerHTML = template;

};


document.querySelector('#search').onkeyup = function (ev) {
    // Number 13 is the "Enter" key on the keyboard
    console.log(ev.keyCode);
    if (ev.keyCode === 13) {
        ev.preventDefault();
        search();
    }

}

