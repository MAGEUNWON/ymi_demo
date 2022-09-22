const root = document.getElementById('root');


function Forum(){
  const form = document.createElement('form');
  form.setAttribute("charset", "UTF-8");
  form.setAttribute("method", "post");
  form.setAttribute("action", "./generalForum.html");
  root.appendChild(form);
  // form태그 만듬. 

  const div = document.createElement('div');
  form.appendChild(div);
  // form > div

  const label = document.createElement('label');
  label.setAttribute("for", "title");
  label.innerHTML = "제목 <br>" 
  div.appendChild(label);
  // form >div >label

  const input = document.createElement('input');
  input.setAttribute("type", "title");
  input.setAttribute("id", "title");
  input.setAttribute("name", "forum_title");
  input.setAttribute("placeholder", "제목을 작성해주세요");
  div.appendChild(input);
  // form > div > input
// --------- 여기까지 제목, 제목 작성 -----------

  const nameDiv = document.createElement('div');
  form.appendChild(nameDiv);
  // form > 2번째 div

  const nameLabel = document.createElement('label');
  nameLabel.setAttribute("for", "name");
  nameLabel.innerHTML = "작성자 <br>"; 
  nameDiv.appendChild(nameLabel);
  // form > 2번째 div > label

  const nameInput = document.createElement('input');
  nameInput.setAttribute("type", "name");
  nameInput.setAttribute("id", "name");
  nameInput.setAttribute("name", "ueser_name");
  nameInput.setAttribute("placeholder", "이름을 적어주세요");
  nameDiv.appendChild(nameInput);
  // form > 2번째 div > input
  // -----여기까지 작성자, 이름 작성-----------

  const contentDiv = document.createElement('div');
  form.appendChild(contentDiv);
  // form > 3번째 div 

  const contentLable = document.createElement('label');
  contentLable.setAttribute("for", "contents");
  contentLable.innerHTML = "내용 <br>";
  contentDiv.appendChild(contentLable);
  // form > 3번째 div >label

  const textarea = document.createElement('textarea');
  textarea.setAttribute("id", "msg");
  textarea.setAttribute("name", "user_message");
  contentDiv.appendChild(textarea);
   // form > 3번째 div >textarea
  // -------여기까지 내용, 내용칸--------------

  const buttonDiv = document.createElement('div');
  buttonDiv.setAttribute("class", "button");
  form.appendChild(buttonDiv);
  // form >  4번째 div(등록하기)

  const button = document.createElement('button');
  button.setAttribute("type", "submit");
  button.innerHTML = "등록하기";
  buttonDiv.appendChild(button);
   // form >  4번째 div(등록하기) >button
}
Forum();

