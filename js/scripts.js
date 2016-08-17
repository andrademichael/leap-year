$(document).ready(function() {
  <!--Backend-->
  var leapYear = function(year) {
    if ((year %  4 === 0) && (year % 100 !== 0) || (year % 400 === 0)) {
      return true;
    } else
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
