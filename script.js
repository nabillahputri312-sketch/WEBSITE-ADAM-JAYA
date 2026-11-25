const WA_NUMBER = '6285368297863';

const waLink = (text) => `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(text)}`;

const materialMsg = (produk) =>
`Halo Admin Pangkalan Pasir Adam Jaya, saya ingin memesan material.
Produk: ${produk}
Jumlah: [diisi pelanggan]
Lokasi pengantaran: [diisi pelanggan]
Sumber: Website`;

const armadaMsg = (kendaraan) =>
`Halo Admin Pangkalan Pasir Adam Jaya, saya ingin menyewa kendaraan.
Kendaraan: ${kendaraan}
Tanggal: [diisi pelanggan]
Tujuan: [diisi pelanggan]
Sumber: Website`;

const generalMsg = 'Halo Admin Pangkalan Pasir Adam Jaya, saya ingin bertanya. Sumber: Website';

document.querySelectorAll('[data-material]').forEach(a => {
  a.href = waLink(materialMsg(a.dataset.material));
  a.target = '_blank'; a.rel = 'noopener';
});
document.querySelectorAll('[data-armada]').forEach(a => {
  a.href = waLink(armadaMsg(a.dataset.armada));
  a.target = '_blank'; a.rel = 'noopener';
});
document.querySelectorAll('[data-wa]').forEach(a => {
  a.href = waLink(generalMsg);
  a.target = '_blank'; a.rel = 'noopener';
});

// menu
const burger = document.querySelector('.burger');
const nav = document.querySelector('nav');
if (burger) burger.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  burger.setAttribute('aria-expanded', open);
});

// tabs katalog
const tabs = document.querySelectorAll('.tab');
function showTab(id){
  tabs.forEach(t => t.classList.toggle('on', t.dataset.tab === id));
  document.querySelectorAll('.panel').forEach(p => p.classList.toggle('on', p.id === id));
  history.replaceState(null, '', '#' + id);
}
tabs.forEach(t => t.addEventListener('click', () => showTab(t.dataset.tab)));
if (tabs.length) showTab(location.hash === '#armada' ? 'armada' : 'material');
