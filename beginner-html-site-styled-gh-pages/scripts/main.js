var myHeading = document.querySelector('h1');
myHeading.innerHTML = 'Cloude Service<br>2018-1';
var text = 'This is a text.';
text =10.5;
var a = 33.7;
var b = a*text;
// alert(b);  //팝업 띄우기
var iceCream = 'chocolate';
var id = prompt('ID 입력',''); //prompt는 입력창
alert(id+'가 로그인함.');
var passwordSystem='12345';
var password = prompt('pw 입력','');
if(password === passwordSystem){
    alert('정상 로그인!');
}
else
alert('비밀번호 오류');
