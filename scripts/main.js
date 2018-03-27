function getIdPw(){ 
    var id = prompt('ID:입력',''); 
    var ps = prompt(id + '가 사용할 초기 비밀번호 입력',''); 

    
    var password = localStorage.getItem('password'); 
    if(ps === '123'){
        localStorage.setItem('id',id); 
        var id = localStorage.getItem('id'); 
        var myHeading = document.querySelector('h1'); 
        myHeading.innerHTML = id + '<br>Homepage'; 
    
    
    } 
 else{ 
       alert('비밀번호가 잘못 입력되었습니다.'); 
       getIdPw(); 
       } 
    } 
    var myButton = document.querySelector('button'); 
   myButton.onclick = function (){ 
       getIdPw(); 
   } 
   