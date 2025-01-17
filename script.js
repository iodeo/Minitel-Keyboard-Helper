var input = document.getElementById("input");
input.addEventListener("change", onChange);

function onChange() {
  phrase = document.getElementById("phrase").value;
  if (phrase != " -- liste --") fillTable(phrase);
  else listAll();
}

function listAll() {
  document.getElementById("phrase").value = " -- liste --";
  var allChars = "";
  for (index in m1b_videotex_unicode) {
    allChars += String.fromCharCode(m1b_videotex_unicode[index]);
  }
  fillTable(allChars);
}

function fillTable(phrase) {
  // get inputs
//  var modele = document.getElementById("modele").value;
//  var standard = document.getElementById("standard").value;
//  var mode = document.getElementById("mode").value;
//  var jeu = document.getElementById("jeu").value;
  var casse = document.getElementById("casse").value;
  var unicode = document.getElementById("unicode").checked;
  var utf8 = document.getElementById("utf-8").checked;
  var sequence = document.getElementById("sequence").checked;
  var output = document.getElementById("output");
  
  // clear table
  rows = output.rows;
  irow = rows.length;
  while (irow-- > 1) {
    rows[irow].remove();
  }
  
  // fill table
  for (icar in phrase) {
    // identify char
    var car = phrase.charAt(icar);
    var cod = car.charCodeAt(0);
    // change charname if not visualisable
    if (cod < 0x21) car = _20firstCharName[cod];
    else if (cod == 127) car = "DEL";
    // find minitel entries
    var index = m1b_videotex_unicode.findIndex(function(ele){return ele==cod;});
    var key;
    if (casse=="maj") key = m1b_videotex_key[index];
    else key = m1b_videotex_key_lower[index];
    var seq = m1b_videotex_sequence[index];
    // append to table
    var row = output.insertRow(-1);
    row.insertCell().innerHTML = formatUnicode(cod);
    row.insertCell().innerHTML = encodeUtf8(cod);
    row.insertCell().innerHTML = car;
    row.insertCell().innerHTML = key;
    row.insertCell().innerHTML = seq;
  }
  
  // hide or display unicode
  var cells = document.querySelectorAll("th:nth-child(5n+1),td:nth-child(5n+1)");
  cells.forEach(element => element.style.display = unicode?"table-cell":"none");
  // hide or display utf-8
  cells = document.querySelectorAll("th:nth-child(5n+2),td:nth-child(5n+2)");
  cells.forEach(element => element.style.display = utf8?"table-cell":"none");
  // hide or display sequence
  cells = document.querySelectorAll("th:nth-child(5n),td:nth-child(5n)");
  cells.forEach(element => element.style.display = sequence?"table-cell":"none");
  
}

const m1b_videotex_unicode = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,95,97,98,99,100,101,102,103,104,105,106,107,108,109,110,111,112,113,114,115,116,117,118,119,120,121,122,123,124,125,126,127,163,167,176,177,188,189,190,192,199,200,201,224,226,228,231,232,233,234,235,238,239,244,246,247,249,251,252,338,339,946,8212,8592,8593,8594,8595];

const m1b_videotex_key = ["Ctrl '","Ctrl A","Ctrl B","Ctrl C","Ctrl D","Ctrl E","Ctrl F","Ctrl G","Ctrl H","Ctrl I","Ctrl J ou Ctrl :","Ctrl K ou Ctrl ;","Ctrl L","Ctrl M ou ⏎","Ctrl N","Ctrl O","Ctrl P","Ctrl Q","Ctrl R","Ctrl S","Ctrl T","Ctrl U","Ctrl V","Ctrl W","Ctrl X","Ctrl Y","Ctrl Z","Esc","Ctrl ,","Ctrl -","Ctrl .","Ctrl ?","Barre espace","TS 1","TS 2","# ou TS 3","TS 4","TS 5","TS 6","' ou TS 7","TS 8","TS 9","* ou TS :","TS ;",",","-",".","TS ?","0","1","2","3","4","5","6","7","8","9",":",";","TS ,","TS -","TS .","?","TS '","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","TS *","TS Annulation","TS #","Ctrl 6","TS A","TS B","TS C","TS D","TS E","TS F","TS G","TS H","TS I","TS J","TS K","TS L","TS M","TS N","TS O","TS P","TS Q","TS R","TS S","TS T","TS U","TS V","TS W","TS X","TS Y","TS Z","Ctrl 1 ou TS Répétition","Ctrl 2","Ctrl 3 ou TS Envoi","Ctrl 4","Ctrl ←","Ctrl Annulation","TS Correction (VGP5)","Ctrl 0","Ctrl *","undefined","undefined","undefined","TS Suite + A (VGP2)","undefined (VGP2)","TS Suite + E (VGP2)","TS Retour + E (VGP2)","TS Suite + TS A","TS Sommaire + TS A","TS Guide + TS A (VGP5)","Ctrl Correction","TS Suite + TS E","TS Retour + TS E","TS Sommaire + TS E","TS Guide + TS E","TS Sommaire + TS I","TS Guide + TS I","TS Sommaire + TS O","TS Guide + TS O (VGP5)","Ctrl 7","TS Suite + TS U","TS Sommaire + TS U","TS Guide + TS U (VGP5)","Ctrl Retour","Ctrl Répétition","Ctrl Suite (VGP5)","Ctrl 5","Ctrl 8","TS 0","Ctrl 9","Ctrl #"];

const m1b_videotex_key_lower = ["Ctrl '","Ctrl A","Ctrl B","Ctrl C","Ctrl D","Ctrl E","Ctrl F","Ctrl G","Ctrl H","Ctrl I","Ctrl J ou Ctrl :","Ctrl K ou Ctrl ;","Ctrl L","Ctrl M ou ⏎","Ctrl N","Ctrl O","Ctrl P","Ctrl Q","Ctrl R","Ctrl S","Ctrl T","Ctrl U","Ctrl V","Ctrl W","Ctrl X","Ctrl Y","Ctrl Z","Esc","Ctrl ,","Ctrl -","Ctrl .","Ctrl ?","Barre espace","TS 1","TS 2","# ou TS 3","TS 4","TS 5","TS 6","' ou TS 7","TS 8","TS 9","* ou TS :","TS ;",",","-",".","TS ?","0","1","2","3","4","5","6","7","8","9",":",";","TS ,","TS -","TS .","?","TS '","TS A","TS B","TS C","TS D","TS E","TS F","TS G","TS H","TS I","TS J","TS K","TS L","TS M","TS N","TS O","TS P","TS Q","TS R","TS S","TS T","TS U","TS V","TS W","TS X","TS Y","TS Z","TS *","TS Annulation","TS #","Ctrl 6","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","Ctrl 1 ou TS Répétition","Ctrl 2","Ctrl 3 ou TS Envoi","Ctrl 4","Ctrl ←","Ctrl Annulation","TS Correction (VGP5)","Ctrl 0","Ctrl *","undefined","undefined","undefined","TS Suite + TS A (VGP2)","undefined (VGP2)","TS Suite + TS E (VGP2)","TS Retour + TS E (VGP2)","TS Suite + A","TS Sommaire + A","TS Guide + A (VGP5)","Ctrl Correction","TS Suite + E","TS Retour + E","TS Sommaire + E","TS Guide + E","TS Sommaire + I","TS Guide + I","TS Sommaire + O","TS Guide + O (VGP5)","Ctrl 7","TS Suite + U","TS Sommaire + U","TS Guide + U (VGP5)","Ctrl Retour","Ctrl Répétition","Ctrl Suite (VGP5)","Ctrl 5","Ctrl 8","TS 0","Ctrl 9","Ctrl #"];

const m1b_videotex_sequence = ["0x00","0x01","0x02","0x03","0x04","0x05","0x06","0x07","0x08","0x09","0x0A","0x0B","0x0C","0x0D","0x0E","0x0F","0x10","0x11","0x12","0x13","0x14","0x15","0x16","0x17","0x18","0x19","0x1A","0x1B","0x1C","0x1D","0x1E","0x1F","0x20","0x21","0x22","0x23","0x24","0x25","0x26","0x27","0x28","0x29","0x2A","0x2B","0x2C","0x2D","0x2E","0x2F","0x30","0x31","0x32","0x33","0x34","0x35","0x36","0x37","0x38","0x39","0x3A","0x3B","0x3C","0x3D","0x3E","0x3F","0x40","0x41","0x42","0x43","0x44","0x45","0x46","0x47","0x48","0x49","0x4A","0x4B","0x4C","0x4D","0x4E","0x4F","0x50","0x51","0x52","0x53","0x54","0x55","0x56","0x57","0x58","0x59","0x5A","0x5B","0x5C","0x5D","0x5F","0x61","0x62","0x63","0x64","0x65","0x66","0x67","0x68","0x69","0x6A","0x6B","0x6C","0x6D","0x6E","0x6F","0x70","0x71","0x72","0x73","0x74","0x75","0x76","0x77","0x78","0x79","0x7A","0x7B","0x7C","0x7D","0x7E","0x7F","0x19 0x23","0x19 0x27","0x19 0x30","0x19 0x31","0x19 0x3C","0x19 0x3D","0x19 0x3E","0x19 0x41 0x41","0x19 0x4B 0x43","0x19 0x41 0x45","0x19 0x42 0x45","0x19 0x41 0x61","0x19 0x43 0x61","0x19 0x48 0x61","0x19 0x4B 0x63","0x19 0x41 0x65","0x19 0x42 0x65","0x19 0x43 0x65","0x19 0x48 0x65","0x19 0x43 0x69","0x19 0x48 0x69","0x19 0x43 0x6F","0x19 0x48 0x6F","0x19 0x38","0x19 0x41 0x75","0x19 0x43 0x75","0x19 0x48 0x75","0x19 0x6A","0x19 0x7A","0x19 0x7B","0x60","0x19 0x2C","0x5E","0x19 0x2E","0x19 0x2F"];

const _20firstCharName = ["NUL","SOH","STX","ETX","EOT","ENQ","ACK","BEL","BS","HT","LF","VT","FF","CR","SO","SI","DLE","Curseur on","REP","SEP","Curseur off","NACK","SYN","ETB","CAN","SS2","SUB","ESC","FS","SS3","RS","US","Espace"];

function formatUnicode(code) {
  var out = code.toString(16);
  out = "0".repeat(4-out.length) + out;
  out = "U+" + out;
  return out.toUpperCase();
}

function encodeUtf8(code) {
  var out;
  if (code < 0x80) { // U+0000 à U+007F
    out = code.toString(16);
    if (out.length < 2) out = "0" + out;
  } else if (code < 0x800) { // U+0080 à U+07FF
    out = ((0b110 << 5) | (code >> 6)).toString(16);
    if (out.length < 2) out = "0" + out;
    var tmp = ((0b10 << 6) | (code & 0x3F)).toString(16);
    if (tmp.length <2) tmp = "0" + tmp;
    out = out + tmp;
  } else if(code < 0x10000) { // U+0800 à U+FFFF
    out = ((0b1110 << 4) | (code >> 12)).toString(16);;
    if (out.length < 2) out = "0" + out;
    var tmp = ((0b10 << 6) | ((code >> 6) & 0x3F)).toString(16);;
    if (tmp.length <2) tmp = "0" + tmp;
    out = out + tmp;
    tmp = ((0b10 << 6) | (code & 0x3F)).toString(16);;
    if (tmp.length <2) tmp = "0" + tmp;
    out = out + tmp;
  }
  out = "0x" + out.toUpperCase();
  return out;
}
