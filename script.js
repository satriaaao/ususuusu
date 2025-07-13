document.getElementById("cekForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const nik = document.getElementById("nik").value.trim();

    if (!nik) {
        alert("Masukkan NIK dulu!");
        return;
    }

    // Redirect langsung ke halaman cek KPU
    const url = `https://cekdptonline.kpu.go.id/CekDPT?nik=${encodeURIComponent(nik)}`;
    window.location.href = url;
});
