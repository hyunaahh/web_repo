
//생성자함수 : Member
function Member(name, age, height){
    this.name = name;
    this.age = age;
    this.height = height;
    this.showInfo = function(){
        return `이름은 ${this.name}이고, 나이는 ${this.age}입니다.`};
}



// makeTr함수

function makeTr(member){

    let html = ''
        html += '<tr>';
    html += '<td>' + member.name + '</td>';
    html += '<td>' + member.age + '</td>';
    html += '<td>' + member.height + '</td>';
    html += '<td>' + member.showInfo() + '</td>';
    html += '<td><button onclick ="this.parentElement.parentElement.remove()">삭제</button></td>';
    html += '</tr>';
    return html;
    
}



//get~~ID : id값으로 element를가져오겠따. onclick : 이벤트와 관련된 속성.
document.getElementById('saveBtn').onclick = function(e) { //이벤트핸들러 : 매개값으로 무조건 이벤트를 받ㄷ음
    console.log(e.target);
    let name = document.getElementById('name').value;
    let age = document.getElementById('age').value;
    let height = document.getElementById('height').value;

    const mem = new Member(name, age, height);
 
    
    let str = makeTr(mem); //<tr>,<td>
 
   
    //function Member(), makeTr(member),
   
    document.getElementById('list').innerHTML += str;
   


    //입력값 초기화
    document.getElementById('name').value = '';
    document.getElementById('age').value = '';
    document.getElementById('height').value = '';
    document.getElementById('name').focus();
    
} //function e


