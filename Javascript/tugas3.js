const siswa = {
    nama: "Maul",
    kelas: "11A",
    nilai: [75, 80, 65, 90, 70]
};

function prosesNilai(siswa) {
    // 1. Tampilkan Identitas
    console.log("===== HASIL PENILAIAN =====");
    console.log("");
    console.log("Nama: " + siswa.nama);
    console.log("Kelas: " + siswa.kelas);
    console.log("");

    // 2. Update Nilai (manipulasi array berdasarkan index)
    siswa.nilai[2] = 70; 
    siswa.nilai[4] = 85; 

    const tugas = siswa.nilai[0];
    const quiz = siswa.nilai[1];
    const uts = siswa.nilai[2];
    const uas = siswa.nilai[3];
    const project = siswa.nilai[4];

    console.log("Tugas: " + tugas);
    console.log("Quiz: " + quiz);
    console.log("UTS: " + uts);
    console.log("UAS: " + uas);
    console.log("Project: " + project);
    console.log("");

    // 3. Total Nilai (tanpa looping)
    const total = tugas + quiz + uts + uas + project;

    // 4. Rata-rata
    const rataRata = total / 5;

    // 5. Predikat (pakai ternary)
    const predikat = rataRata >= 90 ? "A"
                    : rataRata >= 80 ? "B"
                    : rataRata >= 70 ? "C"
                    : rataRata >= 60 ? "D"
                    : "E";

    // 6. Status Kelulusan
    const status = (rataRata >= 75 && uts >= 60 && uas >= 60)
        ? "LULUS"
        : "TIDAK LULUS";

    // 7. Keterangan
    const keterangan = predikat === "A" ? "Sangat Baik"
                      : predikat === "B" ? "Baik"
                      : predikat === "C" ? "Cukup"
                      : "Perlu Perbaikan";

    // 8. Hasil Akhir
    console.log("Total: " + total);
    console.log("Rata-rata: " + rataRata);
    console.log("Predikat: " + predikat);
    console.log("Status: " + status);
    console.log("Keterangan: " + keterangan);
}

prosesNilai(siswa);