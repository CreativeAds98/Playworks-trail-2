
// Custom cursor
const cursor = document.getElementById('customCursor');
document.addEventListener('mousemove', e => {
  cursor.style.left = e.clientX + 'px';
  cursor.style.top = e.clientY + 'px';
});
document.querySelectorAll('a,button,.gi,.fcard,.tc,.ac,.hero-panel').forEach(el => {
  el.addEventListener('mouseenter', () => {
    cursor.querySelector('svg').style.transform = 'scale(1.4)';
    cursor.querySelector('circle:first-child').setAttribute('fill','rgba(139,94,60,0.3)');
  });
  el.addEventListener('mouseleave', () => {
    cursor.querySelector('svg').style.transform = 'scale(1)';
    cursor.querySelector('circle:first-child').setAttribute('fill','rgba(139,94,60,0.15)');
  });
});

// nav scroll
window.addEventListener('scroll',()=>document.getElementById('nav').classList.toggle('scrolled',scrollY>60));

// reveal — show all immediately + animate on scroll
document.querySelectorAll('.reveal').forEach(el=>el.classList.add('show'));
const obs=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add('show')}),{threshold:0});
document.querySelectorAll('.reveal').forEach(el=>obs.observe(el));

// gallery filter
function filterG(cat,btn){
  document.querySelectorAll('.gtab').forEach(t=>t.classList.remove('active'));
  btn.classList.add('active');
  document.querySelectorAll('.gi').forEach(item=>{item.style.display=(cat==='all'||item.dataset.cat===cat)?'block':'none'});
}

// lightbox
const lbData=[
  {e:'💻',t:'Main Work Floor',s:'Open-plan hot desks with natural light'},
  {e:'🗣️',t:'Discussion Room',s:'Private 8-seat acoustically isolated meeting space'},
  {e:'🌿',t:'Living Green Wall',s:'40+ air-purifying plant species'},
  {e:'☕',t:'Artisan Coffee Corner',s:'Locally sourced single-origin beans'},
  {e:'🪵',t:'Reclaimed Teak Desks',s:'Sustainably sourced workspace surfaces'},
  {e:'📺',t:'85" 4K Display',s:'Wireless screen sharing in Discussion Room'},
  {e:'🧘',t:'Wellness Nook',s:'Meditation and stretching space for members'},
  {e:'🌞',t:'Skylight Zone',s:'South-facing floor-to-ceiling glazing'},
  {e:'💧',t:'Indoor Water Feature',s:'Calming biophilic white noise backdrop'},
];
let ci=0;
function openLB(i){ci=i;document.getElementById('lbImg').textContent=lbData[i].e;document.getElementById('lbTitle').textContent=lbData[i].t;document.getElementById('lbSub').textContent=lbData[i].s;document.getElementById('lb').classList.add('open');document.body.style.overflow='hidden'}
function closeLB(e){if(!e||e.target===document.getElementById('lb')||e.currentTarget===e.target){document.getElementById('lb').classList.remove('open');document.body.style.overflow=''}}
function nextLB(){openLB((ci+1)%lbData.length)}
function prevLB(){openLB((ci-1+lbData.length)%lbData.length)}
document.addEventListener('keydown',e=>{
  if(!document.getElementById('lb').classList.contains('open'))return;
  if(e.key==='ArrowRight')nextLB();
  if(e.key==='ArrowLeft')prevLB();
  if(e.key==='Escape')closeLB({target:document.getElementById('lb')});
});





const sttBtn = document.getElementById('stt');
window.addEventListener('scroll', () => {
  sttBtn.classList.toggle('visible', window.scrollY > 400);
});
