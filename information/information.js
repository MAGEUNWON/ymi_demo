// const root = document.getElementById('root');
// const password = document.getElementById('password');
// const psConfirm = document.getElementById('psConfirm');
// const nickname = document.getElementById('nickname');
// const submit = document.getElementById('submit');
// const button = document.getElementById('button');

const tag={
  root:document.getElementById('root'),
  fileLabel:document.getElementById('lbFile'),
  fileInput: document.getElementById('file'),
  saveButton:document.getElementById('saveButton'),
  IDLabe:document.getElementById('lbID'),
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

const save = document.getElementById('saveButton');
save.onclick = showImage;

function showImage(){
  let newImg = document.getElementById('image-show').lastElementChild;
  newImg.style.visibility = "visible";
}

const input = document.getElementById('file');

input.addEventListener('change',()=>{
  const file = input.files[0]; //선택된 파일 가져옴
  let newImage = document.createElement("img");
  newImage.setAttribute("class", "img");
  newImage.src = URL.createObjectURL(file);
  newImage.style.width = "150px";
  newImage.style.height = "150px";
  // newImage.style.visibility = "hidden";
  newImage.style.objectFit = "contain";

  let container = document.getElementById('image-show');
  container.style.visibility = "hidden";
  container.appendChild(newImage);
  console.log(file);

});



const delButton = document.getElementById('delete');
delButton.onclick = deleteimage;

function deleteimage(){
  let newImage = document.getElementById('image-show').lastElementChild;
  newImage.style.visibility = "hidden";
}
// 안됌. 그냥 node를 없애야 하나봄. 가려지기만 하고 그대로 있음. 그럼 초기 이미지도 hidden말고 다른거 써야하나?

// function loadFile(input){
//   const file = input.files[0]; //선택된 파일 가져옴
//   let newImage = document.createElement("img");
//   newImage.setAttribute("class", "img");
//   newImage.src = URL.createObjectURL(file);
//   newImage.style.width = "100px";
//   newImage.style.height = "100px";
//   newImage.style.visibility = "hidden";
//   newImage.style.objectFit = "contain";

//   const container = document.getElementById('image-show');
//   container.appendChild(newImage);
// };
// html에 js가 defer로 연결되어 있어서 아직 선언이 안됨, 해결하려면 async써야함. react 쓸거면 이걸로 연습해 보는게 좋음. 




function init(){
  tag.withdraw.addEventListener('click', function(){
    tag.modal.style.visibility="visible";
  });
  tag.mButton2.addEventListener('click', function(){
    tag.modal.style.visibility="hidden";
  });
}
init();
// 모달 함수

