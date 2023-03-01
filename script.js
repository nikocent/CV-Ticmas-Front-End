const API_URL = "https://randomuser.me/api/";
const API_CONTAINER = document.getElementById("person");
const API_PIC_CONTAINER = document.querySelector("#profile-pic");
const API_LOCATION = document.getElementById("person-location");
const API_PHONE = document.getElementById("person-phonenumber");
const API_EMAIL = document.getElementById("person-email");

document.addEventListener("DOMContentLoaded", function(){
    el_autohide = document.querySelector('.autohide');
    el_appear1 = document.querySelector('.section-skills-appear');
    el_appear2 = document.querySelector('.section-experience-appear');
    el_appear3 = document.querySelector('.section-info-appear');


    if(el_autohide){
      window.addEventListener('scroll', function() {
            let scroll_top = window.scrollY;
            if(scroll_top > 50){
                el_appear1.classList.add('appear');
            } else {
                el_appear1.classList.remove('appear');
            }
           if(scroll_top > 500) {
                el_autohide.classList.remove('scrolled-down');
                el_autohide.classList.add('scrolled-up');
                el_appear2.classList.add('appear');
            }
            else {
                el_appear2.classList.remove('appear');
                el_autohide.classList.remove('scrolled-up');
                el_autohide.classList.add('scrolled-down');
            }
            if(scroll_top > 1500){
                el_appear3.classList.add('appear');
            }else{
                el_appear3.classList.remove('appear');
            }
      }); 
      // window.addEventListener
    }
    // if
  }); 

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
        const phonenumber = person.results[0].cell;
        const email = person.results[0].email;
        API_CONTAINER.textContent = `${title}. ${first} ${last}`;
        API_PIC_CONTAINER.src = person.results[0].picture.large;
        API_LOCATION.textContent = `${city}, ${state}, ${country}.`;
        API_PHONE.textContent = `${phonenumber}`;
        API_EMAIL.textContent = `${email}`;
    })
    .catch((error) => {
        console.error("There was an error fetching", error);
    });
}

getPerson();


