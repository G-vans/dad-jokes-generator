const btnEl = document.getElementById('btn');
const jokEl = document.getElementById('joke')

const apiKey = 'OnjyQRmlhft9xLIlPApMuQ==KOncQUgP8e0uBp9f';

const options = {
    method: "GET",
    headers: {
        "X-Api-Key": apiKey,
    },
};

const apiUrl = 'https://api.api-ninjas.com/v1/dadjokes?limit=1'

function getJoke(){

    try {
        jokEl.innerHTML = "Loading...";
        btnEl.disabled = true;
        btnEl.innerHTML = "Loading...";
    
        fetch(apiUrl, options)
        .then(response => response.json())
        .then(data => {
            jokEl.innerHTML = data[0].joke
            btnEl.disabled = false;
            btnEl.innerHTML = "Tell me a joke again";
        }) 
    } catch (error) {
        jokEl.innerhtml = "Error: " + error.message;

    }

    

}

btnEl.addEventListener("click", getJoke)