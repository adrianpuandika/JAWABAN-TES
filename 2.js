function cetak_gambar(panjang) {
    let bintang = '* ';
    let sd = '= ';
    if (panjang % 2 != 0) { 
       
        let barisNormal = '';
        let barisBintang = '';
        for(let i = 1; i <= panjang; i++) { 
            if (i == 1 || i == panjang) { 
                barisNormal += bintang;
            } else {
                barisNormal += sd;
            }
           
            barisBintang += bintang;
        }
        for(let i = 1; i <= panjang; i++) { 
            if (i % 3 == 0) { 
                console.log(barisBintang);
            } else {
                console.log(barisNormal);
            }
        }
    } else {

        console.log('Panjang harus ganjil');
    }
}

cetak_gambar(5);