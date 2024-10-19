var btn = document.getElementById("on")
var txt = document.getElementById("txt")
var mode = false

window.onload = function () {
  const h = localStorage.getItem("mode")
  
  if (h=="true") {
    btn.style.transform = "translateX(100%)"
    txt.textContent = "Hiện skin không có"
    
    mode = true
  }
}

var ids = ["105: Toro", "106: Krixi", "107: Zephys", "108: Gildur", "109: Veera", "110: Kahlii", "111: Violet", "112: Yorn", "113: Chaugnar", "114: Omega", "115: Jinna", "116: Butterfly", "117: Ormarr", "118: Alice", "119: Mganga", "120: Mina", "121: Marja", "123: Maloch", "124: Ignis", "126: Arduin", "127: Azzen'Ka", "128: Lữ Bố", "129: Triệu Vân", "130: Airi", "131: Murad", "132: Hayate", "133: Valhein", "134: Skud", "135: Thane", "136: Ilumia", "137: Paine", "139: Kil'Groth", "140: Superman", "141: Lauriel", "142: Natalya", "144: Taara", "146: Zill", "148: Preyta", "149: Xeniel", "150: Nakroth", "152: Điêu Thuyền", "153: Kaine", "154: Yena", "156: Aleister", "157: Raz", "162: Kriknak", "163: Ryoma", "166: Arthur", "167: Ngộ Không", "168: Lumburr", "169: Slimz", "170: Moren", "171: Cresht", "173: Fennik", "174: Stuart", "175: Grakk", "177: Lindis", "180: Max", "184: Helen", "186: TeeMee", "187: Arum", "189: Krizzix", "190: Tulen", "191: Rouie", "192: Celica", "193: Amily", "194: Wiro", "195: Enzo", "196: Elsu", "199: Elando'rr", "501: Tel'Annas", "502: Astrid", "503: Zuka", "504: Wonder Woman", "505: Baldum", "506: Omen", "507: The Flash", "508: Wisp", "509: Y'bneth", "510: Liliana", "511: Ata", "512: Rourke", "513: Zata", "514: Roxie", "515: Richter", "518: Quillen", "519: Annette", "520: Veres", "521: Florentino", "522: Errol", "523: D'Arcy", "524: Capheny", "525: Zip", "526: Ishar", "527: Sephera", "528: Qi", "529: Volkath", "530: Dirak", "531: Keera", "532: Thorne", "533: Laville", "534: Dextra", "535: Sinestrea", "536: Aoi", "537: Allain", "538: Iggy", "539: Lorion", "540: Bright", "541: Bonnie", "542: Tachi", "543: Aya", "544: Yan", "545: Yue", "546: Teeri", "548: Bijan", "567: Erin", "568: Ming", "206: Charlotte", "159: Dolia", "597: Biron"]
var s = document.getElementById("mh")
for (var id of ids) {
  var d = document.createElement("button")
  d.textContent = id
  d.onclick = function () {
    var b = this.textContent
    window.location.href = "imgs.html?id=" + encodeURIComponent(b) + "&" + "mode=" + encodeURIComponent(mode.toString())
  }
  s.appendChild(d)
}

function nhan() {
  btn.style.transition = "0.5s"
  if (mode) {
    btn.style.transform = "translateX(0%)"
    txt.classList.add("fade")
    setTimeout( function () {
      txt.textContent = "Ẩn skin không có"
      txt.classList.remove("fade")
    }, 250)
    mode = false
  }
  else {
    btn.style.transform = "translateX(100%)"
    txt.classList.add("fade")
    setTimeout( function () {
      txt.textContent = "Hiện skin không có"
      txt.classList.remove("fade")
    }, 250)
    mode = true
  }
  localStorage.setItem("mode", mode.toString())
}