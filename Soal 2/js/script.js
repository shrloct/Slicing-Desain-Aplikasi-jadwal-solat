const url = "https://api.myquran.com/v2/sholat/jadwal/1204/2024-09-11";

fetch(url)
  .then((response) => response.json())
  .then((data) => {
    const jadwal = data.data.jadwal;
    console.log(jadwal);
  })
  .catch((error) => console.error("Error fetching data:", error));
