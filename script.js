$(document).ready(function() {
  
    $(".info").text("Whats on the agenda");
  
    var momentInterval = setInterval(function() {
      $("#todaysDate").text(moment().format("MMMM Do YYYY, h:mm a"));
    });
});