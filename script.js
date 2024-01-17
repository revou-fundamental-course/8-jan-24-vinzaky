document.getElementById('calculatorForm').addEventListener('submit', function (event) {

    event.preventDefault();
    hitung();
    document.getElementById('sideLength').value = '';
});

document.getElementById('sideLength').addEventListener('keydown', function (event) {

    if (event.keyCode === 13) {
        event.preventDefault();
        hitung();
        document.getElementById('sideLength').value = '';
    }
});

function hitung() {
    var sideLength = document.getElementById('sideLength').value;
    if (isNaN(sideLength)) {
        alert('Masukkan panjang sisi dengan angka.');
        return;
    }
    if (sideLength.trim() === '') {
        alert('Masukkan panjang sisi terlebih dahulu.');
        return;
    }
    var luas = sideLength * sideLength;
    var keliling = 4 * sideLength;
    document.getElementById('result').innerHTML = 'Luas: ' + luas + '<br>Keliling: ' + keliling;
}
