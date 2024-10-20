var urlParams = new URLSearchParams(window.location.search);
var id = urlParams.get('id');
var mode = localStorage.getItem('mode')
var mode1 = localStorage.getItem('mode1')
var mode2 = localStorage.getItem('mode2')
mode = mode == "true"
mode1 = mode1 == "true"
mode2 = mode2 == "true"

var tittle = document.getElementById("tittle")
tittle.textContent = id

var fg = ["10600_B36", "10700_B36", "10800_B40", "10900_B36", "15300_B42", "15600_B36", "16600_B36", "17400_B42", "18400_B37", "19000_B41", "50100_B36", "51400_B36"]
var ide = id.substring(0, 3) + "00"
var bl = false

var num = 0
for (var t of fg) {
  if (t.includes(ide)) {
    var bl = true
    break
  }
  num++
}

var g = new Image()
g.src = "https://dl.ops.kgtw.garenanow.com/CHT/HeroTrainingLoadingNew_B36/" + fg[num] +".jpg"

var d = document.getElementById("img")
var hero = parseInt(id.substring(0,3) + "00")
for (var i = hero; i < hero + 26; i++) {
  var new_id = String(i)
  
  var w = document.createElement("div")
  var a = document.createElement("img")
  var f = document.createElement("p")
  f.textContent = String(i)
  w.appendChild(a)
  if (mode1) w.appendChild(f);
  if (mode2) w.style.maxWidth = "50%";
  else w.style.maxWidth = "100%";
  w.style.textAlign = "center"
  d.appendChild(w)
  a.setAttribute("src", "https://dl.ops.kgtw.garenanow.com/CHT/HeroTrainingLoadingNew_B36/" + new_id +".jpg")
  a.setAttribute("id", new_id)
  
  var v = false
  if (bl && String(i).substring(3,5) == "00") {
    (g.onload = function () {
      v = true
    })(g, a)
  }
  
  if (v) {
    a.setAttribute("src", g.src)
  }
  
  function kt(a, f){
    a.onerror = function() {
      if (!mode) {
        a.remove()
        if (mode1) f.remove();
      }
      if (mode) {
        a.src = "None.jpg"
      }
    }
  }
  kt(a, f)
}

function backk() {
  window.history.back()
}