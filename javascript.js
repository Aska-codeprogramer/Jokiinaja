const counters = document.querySelectorAll('.counter');
counters.forEach(counter => {
    counter.innerText = '0';
    const updateCounter = () => {
        const target = +counter.getAttribute('data-Target');
        const c = + counter.innerText;
        const increment = target / 100;
        if (c < target) {
            counter.innerText = Math.ceil(c + increment);
            setTimeout(updateCounter, 20);
        }
        else {
            counter.innerText = target;
        }
    }
    updateCounter();
})

const form = document.getElementById("orderForm");

form.addEventListener("submit", function(e) {
    e.preventDefault();

    const nama = document.getElementById("nama").value;
    const layanan = document.getElementById("layanan").value;
    const deskripsi = document.getElementById("deskripsi").value;
    const deadline = document.getElementById("deadline").value;

    const nomorWA = "62895637139466";

    const pesan = `Halo, saya ingin order jasa Jokiinaja:

Nama: ${nama}
Layanan: ${layanan}
Deskripsi: ${deskripsi}
Deadline: ${deadline}

Mohon info lebih lanjut ya.`;

    const url = `https://wa.me/${nomorWA}?text=${encodeURIComponent(pesan)}`;

    window.open(url, "_blank");
});