const reduce=matchMedia('(prefers-reduced-motion: reduce)').matches;
document.querySelectorAll('[data-reveal]').forEach(el=>el.classList.add('reveal'));
const items=[...document.querySelectorAll('.reveal')];
if(reduce)items.forEach(el=>el.classList.add('visible'));else{const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('visible');io.unobserve(e.target)}}),{threshold:.08,rootMargin:'0px 0px -40px'});items.forEach(el=>io.observe(el))}
const bar=document.querySelector('.progress'),topBtn=document.querySelector('.backtop');
function update(){const max=document.documentElement.scrollHeight-innerHeight;bar.style.width=(max?scrollY/max*100:0)+'%';topBtn.classList.toggle('show',scrollY>500)}
addEventListener('scroll',update,{passive:true});update();topBtn.addEventListener('click',()=>scrollTo({top:0,behavior:reduce?'auto':'smooth'}));
const hero=document.querySelector('.hero'),orb=document.querySelector('.orb');
if(hero&&orb&&!reduce&&matchMedia('(pointer:fine)').matches){hero.addEventListener('pointermove',e=>{const r=hero.getBoundingClientRect(),x=(e.clientX-r.left)/r.width-.5,y=(e.clientY-r.top)/r.height-.5;orb.style.transform=`translate(${x*18}px,${y*14}px) rotate(${x*8}deg)`});hero.addEventListener('pointerleave',()=>orb.style.transform='')}
