const API_URL = "https://randomuser.me/api/";
const API_CONTAINER = document.getElementById("person");
const API_PIC_CONTAINER = document.querySelector("#profile-pic");
const API_LOCATION = document.getElementById("person-location");

async function getPerson(){
    await fetch(API_URL)
    .then(data => {
        if(!data.ok){
            throw new Error("Network response failed");
        }
        return data.json()})
    .then(person => {
        const {title, first, last} = person.results[0].name;
        const {city, state, country} = person.results[0].location;
        API_CONTAINER.textContent = `${title}. ${first} ${last}`;
        API_PIC_CONTAINER.src = person.results[0].picture.large;
        API_LOCATION.textContent = `${city}, ${state}, ${country}.`;
    })
    .catch((error) => {
        console.error("There was an error fetching", error);
    });
}

getPerson();


