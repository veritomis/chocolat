
const BombonFrutobosque = "./assets/bombones/Baileys.jpeg"
const BombonBailey = "./assets/bombones/cafe.jpeg"
const BombonCafe = "./assets/bombones/ddl.jpeg"
const BombonDulceDeLeche = "./assets/bombones/frutbosque.jpeg"
const BombonFrutilla = "./assets/bombones/frutilla.jpeg"
const BombonLima = "./assets/bombones/lima.jpeg"
const BombonMaracuya = "./assets/bombones/maracuya.jpeg"
const BombonMarroc = "./assets/bombones/marroc.jpeg"
const BombonNutella = "./assets/bombones/nutella.jpeg"

const SELECT_COBERTURA = document.getElementById("cobertura");
const SELECT_RELLENO = document.getElementById("relleno");
const CREATE_BUTTON = document.getElementById('create_button');
const IMG_BOMBON = document.getElementById('img_bombon');


function bombonImg() {
    const cobertura = SELECT_COBERTURA.value;
    const relleno = SELECT_RELLENO.value;
    if (cobertura == "chocolateBlanco") {
        if (relleno == "dulceDeLeche") {
            return BombonFrutobosque;
        }
        else if (relleno == "almendrado") {
            return BombonBailey;
        }
        else if (relleno == "frutado") {
            return BombonCafe;
        }
    }
    else if (cobertura == "chocolateNegro") {
        if (relleno == "dulceDeLeche") {
            return BombonDulceDeLeche;
        }
        else if (relleno == "almendrado") {
            return BombonFrutilla;
        }
        else if (relleno == "frutado") {
            return BombonLima;
        }
    }
    else if (cobertura == "mixto") {
        if (relleno == "dulceDeLeche") {
            return BombonMaracuya;
        }
        else if (relleno == "almendrado") {
            return BombonMarroc;
        }
        else if (relleno == "frutado") {
            return BombonNutella;
        }
    }
}

function display_bombon() {
    console.log(bombonImg())
    IMG_BOMBON.src = bombonImg();
    // volve a cargar a ver
}
let test;
CREATE_BUTTON.addEventListener('click', function () {
    display_bombon();
});