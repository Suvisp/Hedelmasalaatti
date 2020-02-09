const hedelma = document.getElementById("hedelma");
const hinta = document.getElementById("hinta");
const taulu = document.getElementById("taulu");
const output = document.getElementById("output");

var hedelmat = [];

function addRow() {
    //lisää tiedot selaimelle
    taulu.innerHTML += '<tr><td>' + hedelma.value + ' ' + hinta.value + ' EUR' + '</td></tr>';

    //luo annetuista {avain: arvo} pareista olion, joka lisätään taulukkoon
    hedelmat.push({ hedelma: hedelma.value, hinta: hinta.value });
    console.log(hedelmat);
};

function etsiKallein() {
    //etsii kalleimman tuotteen ja palauttaa sen
    kallein = hedelmat.reduce(function (prev, current) {
        if (prev.hinta > current.hinta) {
            return prev
        } else {
            return current
        }
    });

    outputKallein.innerHTML = "";
    outputKallein.innerHTML = kallein.hedelma + ' ' + kallein.hinta + ' EUR';
    console.log(kallein);
};

function etsiHalvin() {
    //etsii halvimman tuotteen ja palauttaa sen
    let edullisin = hedelmat.reduce(function (prev, current) {
        if (prev.hinta < current.hinta) {
            return prev
        } else {
            return current
        }
    });

    outputHalvin.innerHTML = "";
    outputHalvin.innerHTML = edullisin.hedelma + ' ' + edullisin.hinta + ' EUR';
    console.log(edullisin);

};