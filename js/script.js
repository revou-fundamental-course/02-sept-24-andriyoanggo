// Ini javascript

//init();

//function init() {
//    let inisiasi = 10;

//    if (inisiasi == 1) {
//        console.log('Benar');
//    } else if (inisiasi == 10) {
//            console.log('Benar');
//    } else {
//        console.log('Salah');
//    }
//}
//function tryDOM() {
//    let getDOM = document.getElementById('jajar-genjang-btn');
//    getDOM.style.backgroundColor = 'brown';
//    console.log(getDOM);

//function tryDOM() {
//    let getDOM = document.getElementsByClassName('main-content');
//    getDOM[0].style.display = 'none';
//    console.log(getDOM);
//}

function validateLuas() {
    let panjangAlas = document.getElementById('panjang-alas').value; //value untuk menarik nilai
    let tinggi = document.getElementById('tinggi').value;

    if (panjangAlas == '' || tinggi == '') {    //&& dan, || atau 
        alert('form masih kosong');
    }
         
    console.log(panjangAlas);
    console.log(tinggi);
}