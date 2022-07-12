const listGimmick = [
  {
    id:1,
    image:'images/bisnis kecil.jpg',
    caption:'butuh dana untuk bisnis?', 
    message:'Ajukan dananya di sini',
    bg:'#71000b'
  },
  {
    id:2,
    image:'images/bokek.jpg',
    caption:'kebutuhan mendesak, dana belum ada?',
    message:'ajukan dananya di sini',
    bg:'#122535'
  },
  {
    id:3,
    image:'images/burung2.jpg',
    caption:'Hobby memelihara burung? jadikan peluang usaha aja',
    message:'ajukan modalnya di sini',
    bg:'#455a91'
  },
  {
    id:4,
    image:'images/decor interior.jpg',
    caption:'jadikan hunian lebih menawan',
    message:'ajukan dananya di sini',
    bg:'#3a4149'
  },
  {
    id:5,
    image:'images/kerajinan tangan.jpg',
    caption:'mau buka usaha kerajinan tangan?',
    message:'ajukan modalnya di sini',
    bg:'#e45223'
  },
  {
    id:6,
    image:'images/liburan keluarga 2.jpg',
    caption:'butuh libur bareng keluarga?',
    message:'siapkan dananya di sini',
    bg:'#2e4a55'
  },
  {
    id:7,
    image:'images/memasak.jpg',
    caption:'Perlu tambahan dana untuk kursus masak?',
    message:'ajukan dananya di sini',
    bg:'#c24119'
  },
  {
    id:8,
    image:'images/menjahit.jpg',
    caption:'mau buka bisnis jahit baju di rumah?',
    message:'Ajukan modalnya di sini',
    bg:'#8e0011'
  },
  {
    id:9,
    image:'images/pusing.jpg',
    caption:'kebutuhan dana mendesak bikin pusing?',
    message:'ajukan dananya di sini',
    bg:'#15221b'
  },
  {
    id:10,
    image:'images/renovasi rumah.jpg',
    caption:'rumah bocor perlu renovasi?',
    message:'ajukan dananya di sini',
    bg:'#915d3b'
  },

  
]

const hero = document.querySelector('#heroSection');


let random = 0;
hero.innerHTML = `<div class='hero-image'>
                    <img src='${listGimmick[random].image}'/>
                  </div>
                  <div class='message' >
                  
                    <div class='caption'>${listGimmick[random].caption}</div>
                    <a class="btn-message" href="https://api.whatsapp.com/send?phone=62895335200701">${listGimmick[random].message}</a>
                  </div>
                  `;


setInterval(() => {
  
  random = (random < listGimmick.length-1 ) ? random+1 : 0 
  
  
  hero.innerHTML = `<div class='hero-image'>
                      <img src='${listGimmick[random].image}'/>
                    </div>
                    <div class='message' >
                  
                    <div class='caption'>${listGimmick[random].caption}</div>
                    <a class="btn-message" href="https://api.whatsapp.com/send?phone=62895335200701">${listGimmick[random].message}</a>
                  </div>
                  `;
}, 5000)

const benefit = document.querySelectorAll('.benefit');

benefit.forEach(element => {
  
  const info = element.querySelector('.info');

  element.addEventListener('click', () => {
    info.classList.toggle('infoON')
  })
})

const input = document.querySelectorAll('.input')
let merk, thn, bpkb, pajak, lunas, nama, hp, kota, rumah

input.forEach(element => {
  const inputData = element.dataset.item;
  element.addEventListener('change', (event)=> {
    console.log(event.target.value)

    switch (inputData){
    case 'merk':
      merk = event.target.value;
      break;
    case 'tahun':
      thn = event.target.value;
      break;
    case 'bpkb':
      bpkb = event.target.value;
      break;
    case 'pajak':
      pajak = event.target.value;
      break;
    case 'lunas':
      lunas = event.target.value;
      break;
    case 'nama': 
      nama = event.target.value;
      break;
    case 'hp':
      hp = event.target.value;
      break;
    case 'kota':
      kota = event.target.value;
      break;
    case 'rumah':
      rumah = event.target.value;
      break;
  }
  })

  
})

const submitSimulasi = document.querySelector('#submitSimulasi')

submitSimulasi.addEventListener('click', (event)=>{
  event.preventDefault()
  const arrayInput = [merk, thn, bpkb, pajak, lunas, nama, hp, kota, rumah]
  
  if(arrayInput.includes(undefined)){
    alert('Mohon dilengkapi semua datanya')
  } else {
    let text = `Hai, saya mau info taksiran BPKB saya.\n Merk ${merk}, tahun ${thn},\n BPKB ${bpkb},\n pajak ${pajak},\n Pelunasan kendaraan ${lunas},\n rumah ${rumah}.\n Terima kasih,\n saya *${nama}*,\n nomor wa *${hp}*,\n di ${kota}`
    let encoded = encodeURI(text)
    window.open("https://wa.me/62895335200701?text="+encoded,"_blank");

  }
  
})