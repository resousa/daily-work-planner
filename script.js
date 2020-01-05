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

  //add items to local storage
  $(".save-button").click(function() {
    var input = $(this)
      .parent()
      .parent()
      .parent()
      .children("td")
      .find("input");

    var time = $(this)
      .parent()
      .parent()
      .parent()
      .children("td")
      .text()
      .split(":")[0];

    localStorage.setItem(time, input.val());
  
    console.log(time);
  });

  //remove higlight around save button
  $(".save-button").mouseup(function() {
    this.blur();
  });

  //clear storage
  $(".clear-button").click(function() {
    localStorage.clear();
    location.reload();
  });

  //display items from local storage
  $("input#9").val(localStorage.getItem("9"));
  $("input#10").val(localStorage.getItem("10"));
  $("input#11").val(localStorage.getItem("11"));
  $("input#12").val(localStorage.getItem("12"));
  $("input#1").val(localStorage.getItem("1"));
  $("input#2").val(localStorage.getItem("2"));
  $("input#3").val(localStorage.getItem("3"));
  $("input#4").val(localStorage.getItem("4"));
  $("input#5").val(localStorage.getItem("5"));
});
