function x(y) {
    console.log(y);
}


x('ekrem');
x('ekrem');
x('ekrem');


const karealani = kenar => kenar ** 2;
const sonuc = karealani(4);

console.log(sonuc);

const ekrem = () => 'Bu bir test func';

console.log(ekrem());

const vergiToplam = (tutar, oran) => {
    return tutar + tutar * oran;
    // return toplam;
}

console.log(vergiToplam(10, 0.18));