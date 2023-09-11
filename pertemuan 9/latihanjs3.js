let kontenTable = ["NO", "NAMA", "NIM", "PROGRAM STUDI", "NILAI"];
let getJudul = document.querySelector(".judul");
let tableHtml = ""; // Membuat variabel untuk menyimpan kode HTML tabel

for (konjud of kontenTable) {
  tableHtml += `<th>${konjud}</th>`;
}

// Menambahkan baris judul tabel dengan kode HTML yang sudah dibuat
getJudul.innerHTML = `<tr>${tableHtml}</tr>`;

let isian = document.querySelector(".isi");
dataTable = "";
isianTable1 = [
  { nama: "ikhsan", nim: "001", prodi: "teknik informatika", nilai: "3.9" },
];
isianTable2 = [
  { nama: "angga", nim: "002", prodi: "teknik informatika", nilai: "3.0" },
];
isianTable3 = [
  { nama: "elsa", nim: "003", prodi: "teknik informatika", nilai: "3.5" },
];
isianTable4 = [
  { nama: "ujang", nim: "004", prodi: "teknik informatika", nilai: "3.7" },
];

isTable = [isianTable1, isianTable2, isianTable3, isianTable4];
no = 1;

for (iisi of isTable) {
  dataTable += `<tr><td>${no}</td><td>${iisi[0].nama}</td><td>${iisi[0].nim}</td><td>${iisi[0].prodi}</td><td>${iisi[0].nilai}</td></tr>`;
  no++;
}
isian.innerHTML = `<tr>${dataTable}</tr>`;
