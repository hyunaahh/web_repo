function Member(name, age, height){ //new 쓸때는 관례적으로 대문자 써준거. => "생성자 함수! "
        console.log(this);
     // ★ 함수안에서 this 치면 젤 상위객체인 window객체를 의미함.
     this.name = name; // new 키워드로 > 그냥 name이라치면 매개변수 의미.. 
     this.age = age;
     this.height = height;
     this.showInfo = function(){
        return `이름은 ${this.name}이고, 나이는 ${this.age}입니다.`}
}

var myName = 'Hong';
const member = new Member("홍길동", 20, 123.4);
console.log(member.showInfo());
console.log(member);

const members = [
    new Member('홍길동', 18, 123.3),
    new Member('김길동', 19, 124.3),
    new Member('박길동', 20, 125.3)
]

//Q. 함수 : table 만들기

function makeTable(memberAry=[]){ //배열을 매개값으로.. 
    let str = '';
    str += '<table border = "1">';
    str += '<tbody>'
    memberAry.forEach(function(item){
    str += makeTr(item); 
    })
    str += '</tbody>'
    str += '</table>';
    show.InnerHTML = str;
    document.getElementById('show').innerHTML = str;

    //함수 안에 함수 만들어서도 가능함 - 함수안에서만 가능하디.. 밖에선 못씀 
    function makeTr(member){
        let html = '';
        html += '<tr>';
        html += '<td>' + member.name + '</td>';
        html += '<td>' + member.age + '</td>';
        html += '<td>' + member.height + '</td>';
        html += '<td>' + member.showInfo() + '</td>';
        html += '</tr>';
        return html;
    }
}

makeTable(members);

