console.log('function2.js'); //잘 연결됐는지 확인할라고 쳐본거임.. ㅎㅎ... 
// openwith > other> external > vsc

//js에서 객체 만듦
    //vs java : Member member = new Member()
const member = {
    name: '홍길동',
    age: 18,
    height: 178.9,
    showInfo: function (){
        return(`이름은 ${this.name}이고, 나이는 ${this.age} 입니다.`);
    }

}

const member1 = {
    name: '김길동',
    age: 19,
    height: 179.9,
    showInfo: function (){
        return(`이름은 ${this.name}이고, 나이는 ${this.age} 입니다.`);
    }

}

const member2 = {
    name: '박길동',
    age: 20,
    height: 180,
    showInfo: function (){
        return(`이름은 ${this.name}이고, 나이는 ${this.age} 입니다.`);
    }

}


//** 이부분 체크하기! **
const members = [member, member1, member2]; //배열-객체

member.showInfo();
let show = document.getElementById('show');

let str = '';

str += '<table border="1">';
str += '<tbody>';

members.forEach(function(item){
    str += makeTr(item);
})
str+='</tbody>'
str+='</table>'
console.log(str);
show.innerHTML = str; //table>tbody<(tr>td*4)*3



//DOM(=document object model)
//let show = document.getElementById('show'); // element: 태그말하는거. getelementid 이런거다 객체 반환해주는거,  table>(thead>tr>th*2)+(tbody>tr>td*2) +는 형제의 의미임.

//console.log(show);

//show.innerHTML = "<ul><li>APPLE</li><li>BANANA</li></ul>"; //화면에 나타남 . innerHTML : 해석해서 딱 리스트 나타나게

function makeTr(member={name, age, height, showInfo}){ //멤버에오는 타입이 오브젝트로 들어온다고 타입 미리 지정함. 객체타입으로 오겠군..,  member만 적어도 되고 뒤에 ={}적어주면 코드만들어주기가 쉬워서 적어준거임.
    let html = '';
    html += '<tr>';
    html += '<td>' + member.name + '</td>';
    html += '<td>' + member.age + '</td>';
    html += '<td>' + member.height + '</td>';
    html += '<td>' + member.showInfo() + '</td>';
    html += '</tr>';
    return html;
}

console.log(makeTr(member));
