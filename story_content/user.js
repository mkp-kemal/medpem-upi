function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6pY17AJLBzH":
        Script1();
        break;
      case "6Sfnm9tL2b4":
        Script2();
        break;
      case "6gMRCbckMZS":
        Script3();
        break;
      case "6Xalfh89AUg":
        Script4();
        break;
      case "6T2NtHKVjLz":
        Script5();
        break;
      case "5fQYT9F9bv3":
        Script6();
        break;
      case "5X7MHreoJcd":
        Script7();
        break;
      case "5aSANFyJzhf":
        Script8();
        break;
      case "5qsETou9de4":
        Script9();
        break;
      case "6bvQVEfiDUS":
        Script10();
        break;
      case "5WhrXcmV87f":
        Script11();
        break;
      case "5ViZzZQTwHn":
        Script12();
        break;
  }
}

function getAudioElement() {
  return document.getElementById('bgSong');
}

function Script1() {
  var audio = getAudioElement();
  audio.src = "musik.mp3";
  audio.load();
  audio.play();
}

function Script2() {
  var audio = getAudioElement();
  audio.volume = 0.0;
}

function Script3() {
  var audio = getAudioElement();
  audio.volume = 0.1;
}

function Script4() {
  var audio = getAudioElement();
  audio.volume = 0.2;
}

function Script5() {
  var audio = getAudioElement();
  audio.volume = 0.3;
}

function Script6() {
  var audio = getAudioElement();
  audio.volume = 0.4;
}

function Script7() {
  var audio = getAudioElement();
  audio.volume = 0.5;
}

function Script8() {
  var audio = getAudioElement();
  audio.volume = 0.6;
}

function Script9() {
  var audio = getAudioElement();
  audio.volume = 0.7;
}

function Script10() {
  var audio = getAudioElement();
  audio.volume = 0.8;
}

function Script11() {
  var audio = getAudioElement();
  audio.volume = 0.9;
}

function Script12() {
  var audio = getAudioElement();
  audio.volume = 1.0;
}