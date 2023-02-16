const API_URL = "https://randomuser.me/api/";
const API_CONTAINER = document.getElementById("app");
const API_PIC_CONTAINER = document.querySelector("#profile-pic");

async function getPerson(){
    await fetch(API_URL)
    .then(data => {
        if(!data.ok){
            throw new Error("Network response failed");
        }
        return data.json()})
    .then(person => {
        const {title, first, last} = person.results[0].name;
        API_CONTAINER.textContent = `${title}. ${first} ${last}`;
        API_PIC_CONTAINER.src = person.results[0].picture.large;
    });
}

getPerson();


