const searchInput = document.getElementById('search-input');
const resultArtist = document.getElementById("result-artist");
const resultPlaylist = document.getElementById('result-playlists');

function requestApi(searchTerm) {
    const url = `http://localhost:3001/artists?name_like=${searchTerm}`;
    fetch(url)
        .then((response) => response.json())
        .then(result => filterResults(result, searchTerm))
        .catch(error => console.error("Erro na requisição:", error));
}

function filterResults(result, searchTerm) {
    // Filtra os artistas que começam com a palavra pesquisada
    const filteredArtists = result.filter(artist => 
        artist.name.toLowerCase().startsWith(searchTerm.toLowerCase())
    );

    displayResults(filteredArtists);
}

function displayResults(result) {
    resultPlaylist.classList.add('hidden');
    const artistName = document.getElementById('artist-name');
    const artistImage = document.getElementById('artist-img');

    result.forEach(element => {
        artistName.innerText = element.name;
        artistImage.src = element.urlImg;
    });

    resultArtist.classList.remove('hidden');
}

document.addEventListener('input', function () {
    const searchTerm = searchInput.value.toLowerCase();
    if (searchTerm === '') {
        resultPlaylist.classList.add('hidden');
        resultArtist.classList.remove('hidden');
        return
    }
    
    requestApi(searchTerm);
})