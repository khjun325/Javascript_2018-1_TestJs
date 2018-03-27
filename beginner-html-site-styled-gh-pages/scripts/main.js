var myHeading = document.querySelector('h1');
myHeading.innerHTML = 'Cloude Service<br>2018-1';
function getIdPw(){
    var id = prompt('ID 입력',''); //prompt는 입력창
    alert(id+'가 로그인함.');
    var passwordSystem='12345';
    var password = prompt('pw 입력','');
    if(password === passwordSystem){
        alert('정상 로그인!');
    }
    else
    alert('비밀번호 오류');
}
document.querySelector('html').onclick= function(){//전체 html을 가져오는 객체/추적
getIdPw();
}
var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/firefox-icon.png') {
      myImage.setAttribute ('src','mokwon.png');
    } else {
      myImage.setAttribute ('src','firefox-icon.png');
    }
}