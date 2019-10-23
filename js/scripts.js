$(document).ready(function () {
  // $("#formOne").submit(function(event) {
  //   $(".person1").text($("input#person1").val());
  //   $(".person2").text($("input#person2").val());
  //   $(".adjective1").text($("input#adjective1").val());
  //   $(".islandname").text($("input#islandname").val());
  //   $(".adjective2").text($("input#adjective2").val());
  //   $(".monstername").text($("input#monstername").val());
  //   $(".animal").text($("input#animal").val());
  //   $(".exclamation").text($("input#exclamation").val());
  //
  //   $("div#story").show();
  //
  //   event.preventDefault();
  // });

  $("#formTwo").submit(function(event) {
    var shout = $("input#whisper").val().toUpperCase();
    $(".shout").text(shout);

    event.preventDefault();
  });
});
