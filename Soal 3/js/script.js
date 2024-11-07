const url = "https://api.myquran.com/v2/sholat/jadwal/1204/2024-09-11";

fetch(url)
  .then((response) => response.json())
  .then((data) => {
    const jadwal = data.data.jadwal;
    const waktu = document.querySelectorAll(".waktu");
    waktu[0].textContent = jadwal.subuh;
    waktu[1].textContent = jadwal.dzuhur;
    waktu[2].textContent = jadwal.ashar;
    waktu[3].textContent = jadwal.maghrib;
    waktu[4].textContent = jadwal.isya;
  })
  .catch((error) => console.error("Error fetching data:", error));
