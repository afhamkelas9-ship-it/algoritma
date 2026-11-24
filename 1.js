const prompt = require("prompt-sync")()
let detik = Number(prompt("Detik : "))
//detik = 40909090909090909090909

const HARI_KE_DETIK = 24 * 60 * 60
const JAM_KE_DETIK = 60 * 60
const MENIT_KE_DETIK = 60

//INISIALISASI -> Pemberian nilai awal
let hari = jam = menit = sisa = 0

hari = parseInt(detik / HARI_KE_DETIK)
sisa = detik % HARI_KE_DETIK

jam = parseInt(sisa / JAM_KE_DETIK)
sisa %= JAM_KE_DETIK

menit = parseInt(sisa / MENIT_KE_DETIK)
sisa %= MENIT_KE_DETIK;

console.log(`
${hari} hari ${jam} jam ${menit} menit ${sisa} detik
`)