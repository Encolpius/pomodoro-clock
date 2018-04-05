$(document).ready(function() {

  var myTimer;

  function clock() {

    // VARIABLES
    var minutes = 25;
    var interval = 5
    var breakTime = 5;

    function startTimer(duration, display) {
      var timer = duration -2, minutes, seconds;
      $('#workOrBreak').text('Work');
      $('#time').removeClass('breakTime')
      $('#time').addClass('working');
      myTimer = setInterval(function() {
        minutes = parseInt(timer / 60, 10)
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.text(minutes + ":" + seconds);


        if (--timer < 0) {
          clearInterval(myTimer);
          duration = 60 * breakTime;
          startBreakTimer(duration, display);
        }
      }, 1000);
    };

    function startBreakTimer(duration, display) {
      var timer = duration -1, minutes, seconds;
      $('#workOrBreak').text('Break');
      $('#time').removeClass('working')
      $('#time').addClass('breakTime');
      setInterval(function() {
        minutes = parseInt(timer / 60, 10)
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.text(minutes + ":" + seconds);


        if (--timer < 0) {
          clearInterval(myTimer);
          duration = 60 * minutes;
          startTimer(duration, display)
        }
      }, 1000);
    }

    $('#play').click(function() {
      $('#time').text(minutes -1 + ':59')
      var time = 60 * minutes
      display = $('#time');
      startTimer(time, display);
      $('.knobs').fadeTo(700,0);
    })



    function updateTime() {
      $('#time').text(minutes + ":00");
      $('#update-work-minutes').text(minutes);
    }

    function updateBreakTime() {
      $('#break-minutes').text(interval);
    }



    // WORKING MINUTES UPDATE
    $('#work-up').click(function() {
      if (minutes == 60) {
        $('#work-up') === null;
      } else {
        minutes += 1;
        updateTime(minutes);
      }
    });

    $('#work-down').click(function() {
      if (minutes == 10) {
        $('#work-down') === null;
      } else {
        minutes -= 1;
        updateTime(minutes);
      }
    });



    // BREAK MINUTES UPDATE
    $('#break-up').click(function() {
      if (interval == 20) {
        $('#break-up') === null;
      } else {
        interval += 1;
        updateBreakTime(interval);
      }
    });

    $('#break-down').click(function() {
      if (interval == 1) {
        $('#break-down') === null;
      } else {
        interval -= 1;
        updateBreakTime(interval);
        console.log(interval)
      }
    });

    $('#stop').click(function() {
      clearInterval(myTimer);
      $('.knobs').fadeTo(500, 1000);
    })

    $('#reset').click(function() {
      clearInterval(myTimer);
      $('.knobs').fadeTo(500, 1000);
      $('#update-work-minutes').text('25');
      $('#time').text('25:00').css('color', 'black');
    })

  };


  clock()

})
