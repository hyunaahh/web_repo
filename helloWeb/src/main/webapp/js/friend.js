/**
 * friend.js (module이랑 연결됨)
 */

 
  const friend = {
	 
	 name: "Hong",
	 phone: "010-1111-2222",
	 address: "대구 중구 100번지",
	 showInfo: function(){
		 return `이름은 ${this.name}이고 연락처는 ${this.phone}입니다.`
	 }

 }
 
//function friendInfo(friend){
	//return `${friend.name}, ${friend.phone}, ${friend.address}`
//}

function friendInfo(friend){
	return `${friend.name}, ${friend.phone}, ${friend.address}`
}

export{friend, friendInfo};