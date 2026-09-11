// Function biasa
function doubleThree(number) {
    return number * 3 * 2;
}

// Function bisa mereturn function
function doubleFour(number) {
    return function (x) {
        return number * x * 4;
    };
}
// First class citizen = Function yang diperlakukan layaknya sebuah nilai.
const functionBiasa = doubleFour(2);
const FunctionBiasaLanjutan = functionBiasa(2);

console.info("Function Biasa");
console.log(doubleFour(2));
console.log(functionBiasa(2));

// expression Function
const sayZubair = function () {
    return "Hello Zubair";
};

// coba hoisting 
// function diganti dengan =>
// sayMaul adalah identifier
//parameter dan lainnya  sama
const sayMaul = (nama) => {
    return "Hallo" + nama;
};

// penulisan lebih singkat
// syaratnya kalau: parameternya cuma satu
const sayMaulDua = nama => "Hallo" + nama;

// coba panggilan biasa 
console.log(sayMaul("Maulana"));
console.log(sayMaulDua("Ghazali"));

// challange : Buat satu arrow function bernama hitungNilai dengan 3 parameter
// yaitu (nama, nilaiTugas, nilaiUjian)
// harus melakukan operasi berikut:
// - Nilai tugas memiliki bobot 40%
// - Nilai Ujian memiliki bobot 60%
// - Hitung nilai akhir menggunakan operasi aritmatika
// Jika nilai akhir >= 75, "Selamat nama lulus dengan nilai nilaiAkhir"
// Jika nilai akhir <= 75, "Mohon maaf, nama tidak lolos dengan nilai nilaiAkhir"



const hitungNilai = (nama, nilaiTugas, nilaiUjian) => {
  const nilaiAkhir = nilaiTugas * 0.4 + nilaiUjian * 0.6;

  if (nilaiAkhir >= 75) {
    return `Selamat ${nama} lulus dengan nilai ${nilaiAkhir}`;
  } else {
    return `Mohon maaf, ${nama} tidak lolos dengan nilai ${nilaiAkhir}`;
  }
};

// Contoh 2
console.log(hitungNilai("Siti", 60, 70));
// Nilai akhir = 60*0.4 + 70*0.6 = 24 + 42 = 66
// Output: "Mohon maaf, Siti tidak lolos dengan nilai 66"




// ============================================================================================================================//

// First class citizen = Function yang diperlakukan layaknya sebuah nilai