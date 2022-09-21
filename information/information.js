// const root = document.getElementById('root');
// const password = document.getElementById('password');
// const psConfirm = document.getElementById('psConfirm');
// const nickname = document.getElementById('nickname');
// const submit = document.getElementById('submit');
// const button = document.getElementById('button');

const tag={
  root:document.getElementById('root'),
  password:document.getElementById('password'),
  psConfirm:document.getElementById('psConfirm'),
  nickname:document.getElementById('nickname'),
  modify:document.getElementById('modify'),
  withdraw:document.getElementById('withdraw'),
  modal:document.getElementById('modal'),
  mButton1:document.getElementById('mButton1'),
  mButton2:document.getElementById('mButton2')
}
// 태그들 객체로 묶음

function init(){
  tag.withdraw.addEventListener('click', function(){
    tag.modal.style.visibility="visible";
  });
  tag.mButton2.addEventListener('click', function(){
    tag.modal.style.visibility="hidden";
  });
}
init();
