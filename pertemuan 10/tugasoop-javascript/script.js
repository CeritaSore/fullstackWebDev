class gempa {
  constructor(lokasi, skala) {
    this.lokasi = lokasi;
    this.skala = skala;
  }
  statusgempa() {
    if (this.skala < 2) {
      return "tidak terasa";
    } else if (this.skala >= 2 && this.skala < 4) {
      return "bangunan retak";
    } else if (this.skala >= 4 && this.skala <= 6) {
      return "bangunan roboh";
    } else if (this.skala > 6) {
      return "bangunan roboh dan berpotensi tsunami";
    }
  }
  statusClass() {
    if (this.skala < 2) {
      return "bg-success";
    } else if (this.skala >= 2 && this.skala < 4) {
      return "bg-warning";
    } else if (this.skala >= 4 && this.skala <= 6) {
      return "bg-danger";
    } else if (this.skala > 6) {
      return "bg-danger";
    }
  }
}


const listgempa = [
  new gempa("Lokasi A", 1.5),
  new gempa("Lokasi B", 3.0),
  new gempa("Lokasi C", 4.5),
  new gempa("Lokasi D", 6.5),
  new gempa("Lokasi E", 2.2),
  new gempa("Lokasi F", 5.7),
  new gempa("Lokasi G", 3.8),
  new gempa("Lokasi H", 7.2),
];

/*--------------- batas ------------------------- */
let misi = "";
let no = "1";
let huruf = "a";
for (let isgempa of listgempa) {
  misi += `<tr>
<td class="text-center">${no}</td>
<td> ${isgempa.lokasi}</td>
<td>skala ${isgempa.skala}</td>
<td>skala ${isgempa.statusgempa()}</td>
<td class="${isgempa.statusClass()}"></td>
</tr>`;
  no++;
  huruf++;
}

let insertTable = document.querySelector(".isiantable");

insertTable.innerHTML = misi;

