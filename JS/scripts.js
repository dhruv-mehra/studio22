// Set the date we're counting down to
var countDownDate = new Date("July 1, 2020 19:00:00").getTime();
// Update the count down every 1 second
var x = setInterval(function() {
// Get today's date and time
var now = new Date().getTime();
// Find the distance between now and the count down date
var distance = countDownDate - now;
// Time calculations for days, hours, minutes and seconds
var days = Math.floor(distance / (1000 * 60 * 60 * 24));
var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
var seconds = Math.floor((distance % (1000 * 60)) / 1000);

const template =`
  <div class="countdown">
    <div class="count">
      <p class="number">${days}</p>
      <p class="unit">DAYS</p>
    </div>
    <div class="count">
      <p class="number">${hours}</p>
      <p class="unit">HOURS</p>
    </div>
    <div class="count">
      <p class="number">${minutes}</p>
      <p class="unit">MINUTES</p>
    </div>
    <div class="count">
      <p class="number">${seconds}</p>
      <p class="unit">SECONDS</p>
    </div>
  </div>`;

document.getElementById("demo").innerHTML = template;
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "ENTER";
  }
}, 1000);
