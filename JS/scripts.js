// Set the date we're counting down to
var countDownDate = new Date("July 25, 2020 17:22 GMT-0500").getTime();
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
  <section class="countdown">
    <p>premiere begins in...</p>
    <div class="counter">
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
    </div>
  </section>`;

  const enter =`
  <div class="braff">
    <p>Welcome to Premiere!</p>
    <p class="zach">a message from Zach Braff  (RTVF '97)</p>
    <div class="braff" style="padding:56.25% 0 0 0;position:relative;">
      <iframe src="https://player.vimeo.com/video/441232057?color=7936e1&title=0&byline=0&portrait=0" style="position:absolute;top:0;left:0;width:100%;height:100%;" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>
    </div>
    <script src="https://player.vimeo.com/api/player.js"></script>
    <div class="nextFilm"><a href="boba.html">ENTER PREMIERE</a></div>
  </div>`;

document.getElementById("demo").innerHTML = template;
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = enter;
    document.querySelector(".nav").style.display = "block";
  }

}, 1000);
