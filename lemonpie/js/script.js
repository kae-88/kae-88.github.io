$(function(){
  $('.bxslider').bxSlider({
    mode:'fade',
    speed:2000,
    auto:true,
    slideMargin: 3000,
    pager:false,
    controls:false
  });
  lightbox.option({
    'resizeDuration': 200,
    'wrapAround': true
  })
  $('.accordion dd').hide();
  $('.accordion dt').on('click',function(){
    if($($(this).next()).css('display')=='none'){
      $('dd').slideUp();
      $(this).next().slideDown(800);
    }
  });
  $('#to-top-btn a').on('click', function () {
    $('html,body').animate({ scrollTop: 0 });
    });

  $('#btn').on('click',function(){
    $(this).toggleClass('is-active');
    $('#g-nav').slideToggle();
  });

});

const today=new Date();
const year=today.getFullYear();
const month=today.getMonth()+1;
const date=today.getDate();
const day=today.getDay();
const week=['日','月','火','水','木','金','土'];
const elementA=document.getElementById('now');
const str='今日は、'+year+'年'+month+'月'+date+'日'+week[day]+'曜日です。';
elementA.textContent=str;

const omikuzi=['大吉','中吉','小吉','吉','凶'];
const rnd=Math.floor(Math.random()*omikuzi.length);
const elementB=document.getElementById('foutune');
elementB.textContent=omikuzi[rnd];
if(rnd===0){
  elementB.classList.add('good');
}else{
  elementB.classList.remove('good');
}