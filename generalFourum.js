

const submit = document.getElementById('submit');
submit.addEventListener("click", function(){
  const form = document.getElementById('form');
  const title = document.getElementById('title');
  const name = document.getElementById('name');
  const message = document.getElementById('msg');

  if(title.value.trim()===""){
    alert("제목을 적어주세요");
    return false;
  }else if(name.value.trim()===""){
    alert("이름을 적어주세요");
    return false;
  }else if (message.value.trim()===""){
    alert("내용을 적어주세요");
    return false;
  }

  form.action = "http://127.0.0.1:5500/generalForum.html"
  // action 은 form 데이터를 보낼 곳, 어디다 연결해야하지?
  form.method = "GET";
  // method 은 폼의 메서드 방식(POST/GET)
  form.submit();
  // submit() 은 서버에 양식 제출하는 form 메서드
})