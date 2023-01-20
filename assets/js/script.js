$(function () {

    
    let timetable = $("#timetable");
    let userwhattodo9 = $("#no9");
    let userwhattodo10 = $("#no10");
    let userwhattodo11 = $("#no11");
    let userwhattodo12 = $("#no12");
    let userwhattodo1 = $("#no13");
    let userwhattodo2 = $("#no14");
    let userwhattodo3 = $("#no15");
    let userwhattodo4 = $("#no16");
    let userwhattodo5 = $("#no17");
    
  
    timetable.on("click", function (event) {
      let button = event.target;
      if (button.matches('button') === true) {
        let Timetable = {
          no9: userwhattodo9.val(),
          no10: userwhattodo10.val(),
          no11: userwhattodo11.val(),
          no12: userwhattodo12.val(),
          no13: userwhattodo1.val(),
          no14: userwhattodo2.val(),
          no15: userwhattodo3.val(),
          no16: userwhattodo4.val(),
          no17: userwhattodo5.val().trim()
        };
        localStorage.setItem("Timetable", JSON.stringify(Timetable));
  
      }
    })
    
    function init() {
      let storeTimetable = JSON.parse(localStorage.getItem("Timetable"));
      if (storeTimetable !== null) {
        Timetable = storeTimetable;
      } else {
        return;
      }
      document.querySelector('#no9').textContent = storeTimetable.no9;
      document.querySelector('#no10').textContent = storeTimetable.no10;
      document.querySelector('#no11').textContent = storeTimetable.no11;
      document.querySelector('#no12').textContent = storeTimetable.no12;
      document.querySelector('#no13').textContent = storeTimetable.no13;
      document.querySelector('#no14').textContent = storeTimetable.no14;
      document.querySelector('#no15').textContent = storeTimetable.no15;
      document.querySelector('#no16').textContent = storeTimetable.no16;
      document.querySelector('#no17').textContent = storeTimetable.no17;
  
    }
    init()
  
  
  
    let currentTime = dayjs().hour();
  
    for (i = 9; i < 18; i++) {
      if (currentTime > i) {
        $(`#hour-${i}`).attr('class', 'row time-block past');
      }
      else if (currentTime < i) {
        $(`#hour-${i}`).attr('class', 'row time-block future');
      }
      else {
        $(`#hour-${i}`).attr('class', 'row time-block present');
      }
    }
  
 
    let currentDay = dayjs().format('dddd, MMMM D YYYY');
    $('#currentDay').text(currentDay);
  
  })

