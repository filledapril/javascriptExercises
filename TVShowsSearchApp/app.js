const form = document.querySelector('#searchForm')
const showContainerDiv = document.querySelector('#showContainer')


form.addEventListener('submit', async (e) => {
    e.preventDefault()
    showContainerDiv.innerHTML = ''
    const searchTerm = form.elements.query.value;
    const config = { params: { q: searchTerm }}
    const res = await axios.get(`https://api.tvmaze.com/search/shows`, config);
    imgGenerate(res.data)
    form.elements.query.value = '' 
})

//showContainer ---> shouContent ---> img
const imgGenerate = (shows) => {
    shows.map(s => {
        if(s.show.image){
        const img = document.createElement('IMG');
        img.src = s.show.image.medium;

        const details = document.createElement('div')
        details.className = 'details'
        details.innerHTML = `
        <div class='details--title'>
            <h2>${s.show.name}</h2>
            <p>${s.show.language}</p>
        </div>
        
        <div class='details--status'>
            <p>${s.show.type}</p>
            <p>${s.show.status}</p>
        </div>
        <div class='detail-btn'>
            <a href=${s.show.officialSite} target="_blank">Go to official</a>
        </div>
        `
        //for each img generate a div
        const showContent = document.createElement('div')
        showContent.className = 'show--content'
        showContent.append(img, details);
        showContainerDiv.append(showContent);}
    })
}

