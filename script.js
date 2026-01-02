// Langkah 1: Klik Layar Hitam -> Muncul Pesan Lucu
function lanjutKePesan() {
    // Hilangkan Layar Maaf
    document.getElementById("overlay-maaf").style.display = "none";
    
    // Munculkan Layar Pesan Lucu (Flex biar di tengah)
    document.getElementById("overlay-pesan").style.display = "flex";
}

// Langkah 2: Klik Tombol "Iya dong" -> Masuk Desktop
function bukaHadiah() {
    // Hilangkan Layar Pesan
    document.getElementById("overlay-pesan").style.display = "none";

    // Munculkan Desktop Utama
    document.querySelector(".desktop").style.opacity = "1";

    // Play Musik
    var audio = document.getElementById("lagu");
    audio.play().catch(error => {
        console.log("Musik diblokir browser, perlu interaksi user.");
    });

    // Mulai Hujan Love
    setInterval(createHeart, 300);
}

// Fungsi Bikin Love Jatuh
function createHeart() {
    const heart = document.createElement("div");
    heart.classList.add("heart");
    heart.innerHTML = "❤️"; // Bisa ganti emoji lain
    
    // Posisi & Ukuran Random
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.fontSize = Math.random() * 20 + 10 + "px";
    heart.style.animationDuration = Math.random() * 2 + 3 + "s";
    
    document.body.appendChild(heart);

    // Hapus setelah jatuh (biar ringan)
    setTimeout(() => { heart.remove(); }, 5000);
}