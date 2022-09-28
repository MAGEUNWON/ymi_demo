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
  newImage.style.visibility = "hidden";
  newImage.style.objectFit = "contain";

  let container = document.getElementById('image-show');
  container.style.visibility = "hidden";
  container.appendChild(newImage);
  

});



const delButton = document.getElementById('delete');
delButton.onclick = deleteimage;

function deleteimage(){
  const parent = document.getElementById('image-show');
  const child = document.querySelector('#image-show>img');
  parent.removeChild(child);
  // console.log(parent.children)
  // console.log(child);

  // parent.innerHTML = "";
  // removechilde랑 같은건가? 효과는 같음. 
  
  parent.style.visibility = "visible";
}
// image-show 부모노드에서 자식 노드인 img 지워버림 
// 사진 삭제하면 다시 기본 사진 뜨게 만듬. 


// function deleteimage(){
//   const file = input.files;
//   console.log(file)
//   const arrayFile = Array.from(file);
//   console.log(arrayFile);
//   const emptyAarry = arrayFile.splice(0);
//   console.log(arrayFile);
  
//   let obj = {...arrayFile}
//   console.log(obj);
//   let container = document.getElementById('image-show');
//   container.appendChild(obj);
// }
// 아니 뭐 객체를 배열로 바꾸고 배열초기화하고 다시 객체로 바꾸고 이딴거 필요 없었네 



//* function loadFile(input){
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
// *html에 js가 defer로 연결되어 있어서 아직 선언이 안됨, 해결하려면 async써야함. react 쓸거면 이걸로 연습해 보는게 좋음. 




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

