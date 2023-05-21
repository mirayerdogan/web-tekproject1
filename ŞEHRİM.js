var slayt = document.getElementsByClassName("slider")[0].getElementsByTagName("img");
  var slaytSayisi = slayt.length;
  var slaytNo = 0;
  var i = 0;

  slaytGoster(slaytNo);

  function sonrakiSlayt() {
    slaytNo++;
    if (slaytNo >= slaytSayisi) slaytNo = 0;
    slaytGoster(slaytNo);
  }

  function oncekiSlayt() {
    slaytNo--;
    if (slaytNo < 0) slaytNo = slaytSayisi - 1;
    slaytGoster(slaytNo);
  }

  function slaytGoster(slaytNumarasi) {
    for (i = 0; i < slaytSayisi; i++) {
      slayt[i].style.display = "none";
    }
    slayt[slaytNumarasi].style.display = "block";
  }

