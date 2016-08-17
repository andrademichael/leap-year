$(document).ready(function() {
  <!--Backend-->
  var leapYear = function(year) {
    return false;
  };
  <!--Frontend-->
  $("form#leap-year").submit(function(event) {
    event.preventDefault();
    var year = parseInt($("input#year").val());
    var result = leapYear(year);
    $("#result").text(result);
  });
});
