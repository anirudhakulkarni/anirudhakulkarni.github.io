$(document).ready(function() {
  $("[type = submit]").click(function() {
    var comment = $("[type = text]").val();
    $("<p lang=" + ">" + comment + "</p>").appendTo("body");
  });
});
