// let pegawai = [
//   {
//     nama: "adi satria",
//     jabatan: "manager",
//     divisi: "pengembangan produk",
//     nip: "011",
//   },
//   {
//     nama: "febi putri",
//     jabatan: "Quality assurance",
//     divisi: "pengembangan produk",
//     nip: "012",
//   },
//   {
//     nama: "gilang",
//     jabatan: "senior programmer",
//     divisi: "pengembangan produk",
//     nip: "013",
//   },
//   {
//     nama: "sintia bela",
//     jabatan: "marketing",
//     divisi: "pengembangan produk",
//     nip: "014",
//   },
// ];
// let gajiPokok;
// let dataPerusahaan;
// for (let pgw of pegawai) {
//   switch (pegawai) {
//     case pegawai.jabatan === "manager":
//       gajiPokok == 20000000;
//       break;
//     case pegawai.jabatan === "Quality assurance":
//       gajiPokok == 15000000;
//       break;
//     case pegawai.jabatan === "senior programmer":
//       gajiPokok == 20000000;
//       break;
//     case pegawai.jabatan === "marketing":
//       gajiPokok == 10000000;
//       break;
//     default:
//       gajiPokok == 0;
//       break;
//   }
//   dataPerusahaan += `<tr>
//     <td>${pegawai.no}</td>
//     <td>${pegawai.nama}</td>
//     <td>${pegawai.nip}</td>
//     <td>${pegawai.jabatan}</td>
//     <td>${pegawai.divisi}</td>
//     <td>${gajiPokok}</td>
//   </tr>`;
// }
// document.getElementById("tableBody").innerHTML= dataPerusahaan

let pegawai = [
  {
    nama: "adi satria",
    jabatan: "manager",
    divisi: "pengembangan produk",
    nip: "011",
  },
  {
    nama: "febi putri",
    jabatan: "Quality assurance",
    divisi: "pengembangan produk",
    nip: "012",
  },
  {
    nama: "gilang",
    jabatan: "senior programmer",
    divisi: "pengembangan produk",
    nip: "013",
  },
  {
    nama: "sintia bela",
    jabatan: "marketing",
    divisi: "pengembangan produk",
    nip: "014",
  },
];

let dataPerusahaan = ""; // Inisialisasi string dataPerusahaan

for (let i = 0; i < pegawai.length; i++) {
  let gajiPokok;
  let pgw = pegawai[i];
  switch (pgw.jabatan) {
    case "manager":
      gajiPokok = 20000000;
      break;
    case "Quality assurance":
      gajiPokok = 15000000;
      break;
    case "senior programmer":
      gajiPokok = 20000000;
      break;
    case "marketing":
      gajiPokok = 10000000;
      break;
    default:
      gajiPokok = 0;
      break;
  }
  let formattedGaji = gajiPokok.toLocaleString("id-ID", { style: "currency", currency: "IDR" });
  dataPerusahaan += `<tr>
      <td>${i + 1}</td>
      <td>${pgw.nama}</td>
      <td>${pgw.nip}</td>
      <td>${pgw.jabatan}</td>
      <td>${pgw.divisi}</td>
      <td>${formattedGaji}</td>
    </tr>`;
}

document.getElementById("tableBody").innerHTML = dataPerusahaan;
