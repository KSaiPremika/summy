(() => {
    document.addEventListener("DOMContentLoaded", function () {
        let currentYear = new Date().getFullYear() ;
        let targetDate = new Date(currentYear,8,1,10,45);
        let onStart = () => {
            //document.querySelector('.next-year').innerHTML = currentYear
            document.querySelectorAll('.countdown-item').forEach(item => item.classList.add('show'))
        }
        let onTick = ({ years, days, hours, minutes, seconds }) => {
            //document.querySelector('.countdown-item.years').innerHTML = years;
            document.querySelector('.countdown-item.days').innerHTML = days;
            document.querySelector('.countdown-item.hours').innerHTML = hours;
            document.querySelector('.countdown-item.minutes').innerHTML = minutes;
            document.querySelector('.countdown-item.seconds').innerHTML = seconds;
        };
        let options = new LsCountdownOptions({ targetDate, onStart, onTick });
        let countdown = new LsCountdown(options);

        countdown.start();
        window.mycountdown = countdown;
    });
    mapTest

})();


function mapTest(){
    var map = L.map('map').setView([13.0863276, 77.5536848], 13);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

L.marker([13.0863276, 77.5536848]).addTo(map)
    .bindPopup('Yes, Iam available here.')
    .openPopup();
}