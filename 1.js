

function divideAndShort(angka) {
    console.log('Angka diinput : ' + angka);
    let hasilPisah = angka.toString().split('0');
    console.log('Hasil pemisahan 0 : ');
    console.log(hasilPisah);
    let output = ''; // variableoutput
    // hasil pisah
    hasilPisah.forEach(function(angkaHasilPisah) {
        console.log('Angka hasil pisah yang lagi dikerjain : ' + angkaHasilPisah);
        // perubahan menjadi array
        let arrayAngkaHasil = angkaHasilPisah.split('');
        console.log('Hasil array : ' + arrayAngkaHasil);
        let sortedAngka = arrayAngkaHasil.sort();
        console.log('Array yg udh di sort : ' + sortedAngka);
        // penggabungan array setelah di sort
        let angkaFinal = sortedAngka.join('');
        // Hasil final
        output += angkaFinal;
    });
    // output dalam bentuk integer
    console.log(' Hasil output :');
    return parseInt(output);
}

console.log(divideAndShort(5956560159466056));