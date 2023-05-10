// const now = new Date();
// console.log(now);

// console.log(now.getDate());

// console.log(now.getFullYear());

// console.log(now.getMonth());

// console.log(now.getDay());

// console.log(now.getHours());

// console.log('Timestamp: ' +now.getTime());

const newNow = new Date('11/10/1938 9:05:00');
const now = new Date();
console.log(newNow);
console.log(now);

const diff = now.getTime() - newNow.getTime();
console.log(diff);

const minute = Math.round(diff / 1000 / 60);
console.log(`Àtamızı kaybedeli ${minute} dakika geçti.`);
const hour = Math.round(diff / 1000 / 60 / 60);
console.log(`Àtamızı kaybedeli ${hour} saat geçti.`);
const days = Math.round(diff / 1000 / 60 / 60 / 24);
console.log(`Àtamızı kaybedeli ${days} gün geçti.`);
const years = Math.round(diff / 1000 / 60 / 60 / 24 / 365);
console.log(`Àtamızı kaybedeli ${years} yıl geçti.`);

