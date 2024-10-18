var urlParams = new URLSearchParams(window.location.search);
var id = urlParams.get('id');

var tittle = document.getElementById("tittle")
tittle.textContent = id

var d = document.getElementById("img")
var hero = parseInt(id.substring(0,3) + "00")
for (var i = hero; i < hero + 26; i++) {
  var a = document.createElement("img")
  var f = document.createElement("p")
  f.textContent = String(i)
  d.appendChild(a)
  d.appendChild(f)
  a.setAttribute("src", "https://dl.ops.kgtw.garenanow.com/CHT/HeroTrainingLoadingNew_B36/" + String(i) +".jpg")
  function kt(a, f){
    a.onerror = function() {
      a.remove()
      f.remove()
    }
  }
  kt(a, f)
}