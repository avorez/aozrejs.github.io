const daftarBarang = {
  "mie instan": 3300,
  "mie isi 2": 4000,
  "mie sakura": 2000,
  "bihun padamu": 7000,
  "gula 1 kg": 17500,
  "gula 1/2 kg": 9000,
  "gula 1/4 kg": 4500,
  "garam": 4000,
  "vetsin besar": 5000,
  "vetsin sedang": 3000,
  "vetsin kecil": 1000,
  "minyak bantal": 16500,
  "minyak gelas": 5000,
  "molto": 5000,
  "downy": 5300,
  "daia saset": 5500,
  "daia saset satuan": 1000,
  "daia besar": 5000,
  "gentle gen sepasang": 10500,
  "gentle gen setengah": 5500,
  "gentle gen satuan": 1000,
  "soklin": 5500,
  "soklin 2 pcs": 2500,
  "sampo": 10000,
  "sampo lifebuoy": 5500,
  "sampo zink": 5000,
  "tepung 1 kg": 11800,
  "tepung 1/2 kg": 6500,
  "tepung ketan": 11000,
  "tepung beras": 8000,
  "tepung tapioka": 5500,
  "sunlight kecil": 2000,
  "sunglight besar": 5000,
  "sabun nuvo": 14500,
  "sabun kecil": 4500,
  "sabun batang": 5000,
  "odol kecil": 5000,
  "odol besar": 13000,
  "softex pink": 4500,
  "softex biru": 8500,
  "tisu 1 pack": 30000,
  "tisu 1 an": 8000,
  "sarden abc": 8500,
  "sarden atan": 6500,
  "mentega forvita": 6000,
  "tomat pedas": 7500,
  "tomat manis": 7500,
  "kecap kecil": 2000,
  "kecap besar": 15800,
  "vanili": 1000,
  "dancow serenteng": 34500,
  "dancow setengah": 17500,
  "dancow satuan": 4000,
  "susu enak": 7500,
  "good day serenteng": 19700,
  "good day setengah": 10500,
  "good day satuan": 2500,
  "torabika serenteng": 20000,
  "torabika setengah": 10000,
  "torabika satuan": 2500,
  "creamy latte serenteng": 15500,
  "creamy latte setengah": 8000,
  "creamy latte satuan": 2000,
  "kapal api serenteng": 10000,
  "kapal api setengah": 5500,
  "kapal api satuan": 1500,
  "kopi mix serenteng": 15500,
  "kopi mix setengah": 8000,
  "kopi mix satuan": 2000,
  "teh poci": 5000,
  "gunung satria serenteng": 11000,
  "gunung satria satuan": 1500,
  "acan": 5000,
  "sajiku": 20500,
  "marinasi": 11000,
  "racik": 17000,
  "racik nasgor": 17000,
  "sajiku nasgor": 17000,
  "ketumbar": 11000,
  "baput": 11000,
  "lada": 10800,
  "boncabe": 11000,
  "royco": 5000,
  "pin": 14500,
  "click": 18000,
  "titan": 15000
};

const barangSelect = document.getElementById("barang");
const jumlahInput = document.getElementById("jumlah");
const hargaSatuan = document.getElementById("hargaSatuan");
const subtotalDiv = document.getElementById("subtotal");
const daftar = document.getElementById("daftarBelanja");
const totalHarga = document.getElementById("totalHarga");
const form = document.getElementById("formKasir");
const resetBtn = document.getElementById("resetBtn");

let total = 0;

// Isi dropdown barang
for (let nama in daftarBarang) {
  const option = document.createElement("option");
  option.value = nama;
  option.textContent = nama;
  barangSelect.appendChild(option);
}

// Update harga & subtotal saat input berubah
function updateSubtotal() {
  const nama = barangSelect.value;
  const jumlah = parseInt(jumlahInput.value) || 0;
  if (nama && daftarBarang[nama]) {
    const harga = daftarBarang[nama];
    const subtotal = harga * jumlah;
    hargaSatuan.textContent = `Harga: Rp${harga.toLocaleString()}`;
    subtotalDiv.textContent = `Subtotal: Rp${subtotal.toLocaleString()}`;
  } else {
    hargaSatuan.textContent = "Harga: Rp0";
    subtotalDiv.textContent = "Subtotal: Rp0";
  }
}

barangSelect.addEventListener("change", updateSubtotal);
jumlahInput.addEventListener("input", updateSubtotal);

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const nama = barangSelect.value;
  const jumlah = parseInt(jumlahInput.value);
  const harga = daftarBarang[nama];
  const subtotal = harga * jumlah;

  const li = document.createElement("li");
  li.textContent = `${nama} - ${jumlah} x Rp${harga.toLocaleString()} = Rp${subtotal.toLocaleString()}`;
  daftar.appendChild(li);

  total += subtotal;
  totalHarga.textContent = `Rp${total.toLocaleString()}`;
  form.reset();
  updateSubtotal();
});

resetBtn.addEventListener("click", () => {
  daftar.innerHTML = "";
  total = 0;
  totalHarga.textContent = "Rp0";
});
