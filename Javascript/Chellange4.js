const dataSuhu = [
    30,
    86,
    function() {
        return dataSuhu[0] * 9/5 + 32;
    },
    function() {
        return (dataSuhu[1] - 32) * 5/9;
    }
];

console.log("Celcius:", dataSuhu[0]);
console.log("Fahrenheit:", dataSuhu[1]);
console.log("Hasil konversi elemen 1 (C ke F):", dataSuhu[2]());
console.log("Hasil konversi elemen 2 (F ke C):", dataSuhu[3]());