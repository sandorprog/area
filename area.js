document.getElementById("myBtn").addEventListener("click", rosieTheFortuneTeller);

function josClick (){

var name = prompt('Helló, kedvesem! A nevem Rosie és egy szakértő jövendőmondó vagyok. Téged hogy hívnak?');
console.log(name);

var joslat = prompt('Áh, igen, láttam, hogy el fogsz jönni hozzám, ' + name + '. Kérlek válassz az alábbiak közül egyet, és gépeld be a szövegmezőbe: teknős, rózsa, teáscsésze, hold.');
console.log(joslat);

if(joslat=='teknős'){
  alert('Hmmm...' + name + '. Kiváló választás, lássuk, mit tartogat a jövőd! Íme a jövőd: Ne ess pánikba. Midíg a teknős nyer')
}
else if(joslat=='rózsa'){
  alert('Hmmm...' + name + '. Kiváló választás, lássuk, mit tartogat a jövőd! Íme a jövőd: Találni fogsz valamit. Lehet, hogy fontos lesz.')
}
else if(joslat=='teáscsésze'){
  alert('Hmmm...' + name + '. Kiváló választás, lássuk, mit tartogat a jövőd! Íme a jövőd: A vég közel. Akár ehetnél is egy desszertet.')
}
else if(joslat=='hold'){
  alert('Hmmm...' + name + '. Kiváló választás, lássuk, mit tartogat a jövőd! Íme a jövőd: Nézz körül, mielőtt ugranál. Vagy viselj ejtőernyőt.')
}
else{
  alert('Sajnálom,' + name + ', de nem értem, amit mondasz. Biztos vagy benne, hogy a felajánlott lehetőségek egyikét írtad be?')
}
} 

rosieTheFortuneTeller ();