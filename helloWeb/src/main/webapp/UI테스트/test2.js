//test2.js

let novemberCal = {
	
	makeHead(){
		let day = ['일', '월','화','수','목','금','토'];

		let mh = ''
		mh += '<thead><tr>'
		mh += '<tr>'
		mh += day.forEach(day => '<th>'+ day +'</th>');
		mh += '</tr></thead>'
		return mh;
	},
	

	makeBody(){
		let mb = ''
		mb += '<tbody><tr>'
		// 일,월,화 공백임..
		mb += '<td> + " " + </td>';
		mb += '<td> + " " + </td>';
		mb += '<td> + " " + </td>';
		mb += '<td> + "1" + </td>';
		mb += '<td> + "2" + </td>';
		mb += '<td> + "3" + </td>';
		mb += '<td> + "4" + </td>';
		
		for(let i=5; i<=30; i++){
			mb += '<td>' + i + '</td>'
		if(i % 7 == 4){
			mb += '</tr><tr>'
			}
			
			}
			
		mb += '</tr></tbody>'
		return mb;
	},
	

	
	makeCal(){
		let mc = '<table border ="1">';
		mc += [1].reduce((acc, item) => acc+ this.makeHead()+ this.makeBody(),'');
		mc += '</table>'
		this.table = mc;
	},
	
	show(){
		document.getElementById('cal').innerHTML = this.table;
	}
	
} //nC


novemberCal.show();