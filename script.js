'use strict';

// prettier-ignore
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

const form = document.querySelector('.form');
const containerWorkouts = document.querySelector('.workouts');
const inputType = document.querySelector('.form__input--type');
const inputDistance = document.querySelector('.form__input--distance');
const inputDuration = document.querySelector('.form__input--duration');
const inputCadence = document.querySelector('.form__input--cadence');
const inputElevation = document.querySelector('.form__input--elevation');
if(navigator.geolocation){
    navigator.geolocation.getCurrentPosition(
        function(position){
            const latitude=position.coords.latitude;
            const longitude=position.coords.longitude;
            console.log(`https://www.google.com/maps/@${latitude},${longitude},15z?entry=ttu`);
            let a=[latitude,longitude];
            const map = L.map('map').setView(a, 20);

            L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            }).addTo(map);

            L.marker(a).addTo(map)
            .bindPopup('A pretty CSS popup.<br> Easily customizable.')
            .openPopup();
        },function(){
            console.log("We are unable to determine your location");
        }
    )
    console.log("this is for testing git");
}