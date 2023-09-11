let judulTabel = document.querySelector(".judul");
let isiTabel = document.querySelector(".isi");
let initJudul = "";
let initIsi = "";
let no = 1;
isJudul = [
  "No",
  "Nopol",
  "Nama Kendaraan",
  "KM Awal",
  "KM Akhir",
  "Biaya Ganti Oli",
  "Biaya Service",
  "Total Biaya",
];

for (dataJudul of isJudul) {
  initJudul += `<th>${dataJudul}</th>`;
}
judulTabel.innerHTML = `<tr>${initJudul}</tr>`;

/*batas program yang berjaln saat ini
 */

let k1 = { nopol: "1111", nama: "Bus", km_awal: 3500, km_akhir: 5400 };

let k2 = { nopol: "1112", nama: "Bus", km_awal: 7000, km_akhir: 10000 };

let k3 = { nopol: "1113", nama: "Van", km_awal: 8908, km_akhir: 12342 };

let k4 = { nopol: "1114", nama: "Van", km_awal: 125, km_akhir: 200 };

let k5 = { nopol: "1115", nama: "Sedan", km_awal: 4000, km_akhir: 6000 };

let k6 = { nopol: "1116", nama: "Sedan", km_awal: 123, km_akhir: 1234 };

let k7 = { nopol: "1117", nama: "Sedan", km_awal: 8000, km_akhir: 15000 };

let kendaraan = [k1, k2, k3, k4, k5, k6, k7];

for (dataKendaraan of kendaraan) {
  let statusOli = dataKendaraan.km_akhir - dataKendaraan.km_awal;
  let hargaOli;
  // keadaan oli mobil
  switch (dataKendaraan.nama) {
    case "Bus":
      hargaOli = statusOli >= 1000 ? 750000 : 0;
      break;
    case "Van":
      hargaOli = statusOli >= 1000 ? 500000 : 0;
      break;
    case "Sedan":
      hargaOli = statusOli >= 1000 ? 300000 : 0;
      break;
    default:
      hargaOli = 0;
      break;
  }

  let statusKendaraan = dataKendaraan.km_akhir - dataKendaraan.km_awal;
  let hargaService;
  switch (dataKendaraan.nama) {
    case "Bus":
      hargaService = statusKendaraan >= 2500 ? 1500000 : 0;
      break;
    case "Van":
      hargaService = statusKendaraan >= 2500 ? 1000000 : 0;
      break;
    case "Sedan":
      hargaService = statusKendaraan >= 2500 ? 750000 : 0;
      break;
    default:
      hargaService = 0;
      break;
  }
  let totalBiaya = hargaOli + hargaService;
  initIsi += `<tr>
    <td>${no}</td>
    <td>${dataKendaraan.nopol}</td>
    <td>${dataKendaraan.nama}</td>
    <td>${dataKendaraan.km_awal}</td>
    <td>${dataKendaraan.km_akhir}</td>
    <td class="text-end">Rp ${hargaOli}</td>
    <td class="text-end">Rp ${hargaService}</td>
    <td class="text-end">Rp ${totalBiaya}</td>
  </tr>`;
  no++;
}

isiTabel.innerHTML = initIsi;
//   switch (dataKendaraan.nama.toLowerCase() ) {
//     case "bus":
//       hargaOli = 750000;
//     case "van":
//       hargaOli = 500000;
//     case "sedan":
//       hargaOli = 300000;
//     default:
//       hargaOli = 0;
//   }
