// function getOption() {
//   let obj = document.getElementById("mySelect");
//   let attendee = document.getElementById("guest").value;
//   console.log(attendee);
//   console.log(obj.options[obj.selectedIndex].text);
// }

// import Airtable from "airtable";
// var base = new Airtable({ apiKey: "keyFqdNK74hRi2RrC" }).base(
//   "appw4bpnnZPGMV6oj"
// );

// base("Table 1").create(
//   [
//     {
//       fields: {
//         Name: `${attendee}`,
//         ATTENDANCE: `${obj}`,
//       },
//     },
//   ],
//   function (err, records) {
//     if (err) {
//       console.error(err);
//       return;
//     }
//     records.forEach(function (record) {
//       console.log(record.getId());
//     });
//   }
// );

var countDownDate = new Date("Oct 9, 2021 16:00:00").getTime();

// Update the count down every 1 second
var x = setInterval(function () {
  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the element with id="countdown"
  document.getElementById("countdown").innerHTML =
    days +
    "dae " +
    hours +
    "ure " +
    minutes +
    "minute " +
    seconds +
    "sekondes ";

  // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("countdown").innerHTML = "EXPIRED";
  }
}, 1000);

var currentImage = 0,
  images = [
    // "Engagement/0.jpg",
    // "Engagement/1.jpg",
    // "Engagement/2.jpg",
    // "Engagement/3.jpg",
    "Engagement/4.jpg",
    "Engagement/5.jpg",
    "Engagement/6.jpg",
    // "Engagement/7.jpg",
    "Engagement/8.jpg",
    // "Engagement/9.jpg",
    "Engagement/10.jpg",
  ];

function initSlideshow() {
  setImage(0);
  setInterval(function () {
    nextImage();
  }, 5000);
}

function nextImage() {
  if (images.length === currentImage + 1) {
    currentImage = 0;
  } else {
    currentImage++;
  }
  setImage(currentImage);
}

function setImage(image) {
  document.querySelectorAll(".slideshow")[0].src = images[image];
}
window.onload = initSlideshow();
