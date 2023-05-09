// const a = (callBack) => {
//     let yas = 40;
//     callBack(yas);
// };

// a(function (value) {
//     console.log(value);
// })

let students = ['ekrem', 'naz', 'kuduruk'];

// students.forEach(function () {
//     console.log('selam')

// })

// students.forEach(function (kisi, index) {
//     console.log('selam ', kisi, index)

// })

// const ogrenci = (kisi, index) => {
//     console.log(`${kisi} ${index}`);
// }

// students.forEach(ogrenci)

//---------------------------------------------------------------------

const ulum = document.querySelector('.main');

let html = ``;
students.forEach(stud => {
    html += `<li>${stud}</li>`
})
console.log(html);

ulum.innerHTML = html;