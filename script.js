let textbox = document.getElementById("textbox");
textbox.addEventListener("input", function () {
  var text = this.value;
  var char = text.length;

  document.getElementById("char").innerHTML = char;

  text = text.trim();
  var word = text.split(" ");
  var cleanList = word.filter(function (elm) {
    return elm != 0;
  });
  document.getElementById("word").innerHTML = cleanList.length;
});
