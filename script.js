$(document).ready(function() {
  //record current hour for addColor
  var current = moment().hour();
  console.log(moment().hour());

  //text
  $(".info").text("Whats on the agenda");

  //MomemtJS display
  var momentInterval = setInterval(function() {
    $("#todaysDate").text(moment().format("MMMM Do YYYY, h:mm a"));
  });

  //assign hour value to tr class
  addColor(".time9", 9);
  addColor(".time10", 10);
  addColor(".time11", 11);
  addColor(".time12", 12);
  addColor(".time1", 13);
  addColor(".time2", 14);
  addColor(".time3", 15);
  addColor(".time4", 16);
  addColor(".time5", 17);

  //function to add colors
  function addColor(trNumber, time) {
    if (current > time) {
      $(trNumber).addClass("over");
    } else if (current < time) {
      $(trNumber).addClass("soon");
    } else if ((current = time)) {
      $(trNumber).addClass("now");
    }
    console.log(time);
  }
});
