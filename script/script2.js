let from18to35 = document.getElementById("from18to35");
let from36to45 = document.getElementById("from36to45");
let upTo46 = document.getElementById("upTo46");
let buttons = document.querySelectorAll('button');
let selectedYear = "";

    selectedYear = window.sessionStorage.getItem('year');
    if (selectedYear > 1986 && selectedYear < 2003) {
      from18to35.style.display = "flex";
    }
    else if (selectedYear > 1976 && selectedYear < 1986) {
      from36to45.style.display = "flex";
    }
    else if (selectedYear < 1976) {
      upTo46.style.display = "flex";
    }

    // button.onclick = startVoiceRec();

    buttons.forEach(function(button) {
      button.onclick = startVoiceRec;
    });

    function startVoiceRec() {
      window.open('voice.html');
    };
