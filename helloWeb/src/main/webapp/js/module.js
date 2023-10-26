//module.js (friend랑 연결됨)

import {friend, friendInfo} from './friend.js';
import {cal} from '../todo/calendar.js';



const friend2 = {
	name: "Hwnag",
	phone: "010-3333-5555",
	address: "대구 중구 200번지",
	showInfo: function(){
		return '${this.name}';
	}	
}
console.log(friend.showInfo());
console.log(friendInfo(friend));

CalendarObj.showCalendar();