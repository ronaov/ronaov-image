var urlParams = new URLSearchParams(window.location.search);
var id = urlParams.get('id');

var tittle = document.getElementById("tittle")
tittle.textContent = id

var fg = ["10700_B36", "10800_B40", "10900_B36", "15300_B42", "15600_B37", "16600_B37", "17400_B42", "18400_B37", "19000_B41", "50100_B36", "51400_B37", "54400_B37"]
var ide = id.substring(0, 3) + "0"
var bl = false

var num = 0
for (var t of fg) {
  if (t.includes(ide)) {
    var bl = true
    break
  }
  num++
}

var d = document.getElementById("img")
var hero = parseInt(id.substring(0,3) + "00")
for (var i = hero; i < hero + 26; i++) {
  var new_id = String(i)
  if (bl && String(i).substring(3,5) == "00") {
    new_id = fg[num]
  }
  var a = document.createElement("img")
  var f = document.createElement("p")
  f.textContent = String(i)
  d.appendChild(a)
  d.appendChild(f)
  a.setAttribute("src", "https://dl.ops.kgtw.garenanow.com/CHT/HeroTrainingLoadingNew_B36/" + new_id +".jpg")
  function kt(a, f){
    a.onerror = function() {
      a.remove()
      f.remove()
    }
  }
  kt(a, f)
}