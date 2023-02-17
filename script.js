var form = document.getElementById("input");
form.addEventListener("change", doit);

function doit() {
  // get inputs
  var modele = document.getElementById("modele").value;
  var standard = document.getElementById("standard").value;
  var mode = document.getElementById("mode").value;
  var jeu = document.getElementById("jeu").value;
  var casse = document.getElementById("casse").value;
  var phrase = document.getElementById("phrase").value;
  var output = document.getElementById("output");
  
  /* debug
  console.log(modele)
  console.log(standard)
  console.log(mode)
  console.log(jeu)
  console.log(casse)
  console.log(phrase)
  */
  
  // clear table
  rows = output.rows;
  irow = rows.length;
  while (irow-- > 1) {
    rows[irow].remove();
  }
  
  for (icar in phrase) {
    var car = phrase.charAt(icar);
    var cod = car.charCodeAt(0);
    
    var index = m1b_videotex_ascii.findIndex(function(ele){return ele==cod;});
    var str = m1b_videotex_key[index];
    //console.log("%i : %s : %s", cod, car, str)
    var row = output.insertRow(-1);
    row.insertCell().innerHTML = cod;
    row.insertCell().innerHTML = car;
    row.insertCell().innerHTML = str;
  }
}

const m1b_videotex_ascii = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,95,97,98,99,100,101,102,103,104,105,106,107,108,109,110,111,112,113,114,115,116,117,118,119,120,121,122,123,124,125,126,127,163,167,176,177,192,200,201,223,224,226,228,231,232,233,234,235,238,239,244,246,247,249,251,252,338,339,8212,8592,8593,8594,8595]

const m1b_videotex_key = ["Ctrl '","Ctrl A","Ctrl B","Ctrl C","Ctrl D","Ctrl E","Ctrl F","Ctrl G","Ctrl H","Ctrl I","Ctrl J ou Ctrl :","Ctrl K ou Ctrl ;","Ctrl L","Ctrl M ou ⏎","Ctrl N","Ctrl O","Ctrl P","Ctrl Q","Ctrl R","Ctrl S","Ctrl T","Ctrl U","Ctrl V","Ctrl W","Ctrl X","Ctrl Y","Ctrl Z","Esc","Ctrl ,","Ctrl -","Ctrl .","Ctrl ?","Barre espace","TS 1","TS 2","# ou TS 3","TS 4","TS 5","TS 6","' ou TS 7","TS 8","TS 9","* ou TS :","TS ;",",","-",".","TS ?","0","1","2","3","4","5","6","7","8","9",":",";","TS ,","TS -","TS .","?","TS '","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","TS *","TS Annulation","TS #","Ctrl 6","TS A","TS B","TS C","TS D","TS E","TS F","TS G","TS H","TS I","TS J","TS K","TS L","TS M","TS N","TS O","TS P","TS Q","TS R","TS S","TS T","TS U","TS V","TS W","TS X","TS Y","TS Z","Ctrl 1 ou TS Répétition","Ctrl 2","Ctrl 3 ou TS Envoi","Ctrl 4","Ctrl ←","Ctrl Annulation","TS Correction (VGP5)","Ctrl 0","Ctrl *","TS Suite + A (VGP2)","TS Suite + E (VGP2)","TS Retour + E (VGP2)","Ctrl Suite (VGP5)","TS Suite + TS A","TS Sommaire + TS A","TS Guide + TS A (VGP5)","Ctrl Correction","TS Suite + TS E","TS Retour + TS E","TS Sommaire + TS E","TS Guide + TS E","TS Sommaire + TS I","TS Guide + TS I","TS Sommaire + TS O","TS Guide + TS O (VGP5)","Ctrl 7","TS Suite + TS U","TS Sommaire + TS U","TS Guide + TS U (VGP5)","Ctrl Retour","Ctrl Répétition","Ctrl 5","Ctrl 8","TS 0","Ctrl 9","Ctrl #"]
