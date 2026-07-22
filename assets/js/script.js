const menuBtn=document.querySelector('.menu-btn');
const nav=document.querySelector('.nav-links');
if(menuBtn&&nav){menuBtn.addEventListener('click',()=>nav.classList.toggle('open'))}
const stage=document.querySelector('.book-stage');
const book=stage?.querySelector('img');
if(stage&&book){
  stage.addEventListener('mousemove',e=>{
    const r=stage.getBoundingClientRect();
    const x=(e.clientX-r.left)/r.width-.5;
    const y=(e.clientY-r.top)/r.height-.5;
    book.style.transform=`rotateY(${x*12-7}deg) rotateX(${-y*8}deg) translateY(-3px)`;
  });
  stage.addEventListener('mouseleave',()=>book.style.transform='rotateY(-7deg) rotateX(1deg)');
}
document.querySelectorAll('[data-year]').forEach(el=>el.textContent=new Date().getFullYear());