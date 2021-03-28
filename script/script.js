
let selectDay = document.getElementById("select__day");
let selectYear = document.getElementById("select__year");
for (let year = 1920; year <= 2021; year++) {
  let options = document.createElement("OPTION");
  document.getElementById("select__year").appendChild(options).innerHTML = year;
}

for (let day = 1; day <= 31; day++) {
  let options = document.createElement("OPTION");
  document.getElementById("select__day").appendChild(options).innerHTML = day;
}
selectYear.addEventListener('change', function() {
  let selectedYear = this.value;
  sessionStorage.setItem('year', this.value);
});

let preload = document.querySelector(".preload_wrapper");

function buttonPreloadOn() {
  preload.style.display = "flex";
  function preloadClose() {
    preload.style.display = "none";
  }
  setTimeout(preloadClose, 2000);
}
