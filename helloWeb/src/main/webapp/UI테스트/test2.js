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
		for(let i=1; i<=30; i++){
			mb += '<td>' + i + '</td>'
		if(i % 7 == 5){
				mb += '</tr><tr>'
			}
			
			}
			
		
		mb += '</tr></tbody>'
		return mb;
	},
	
	cal : '',
	
	makeCal(){
		let mc = '<table border ="1">';
		mc += [1].reduce((acc, item) => acc+ this.makeHead()+ this.makeBody(),'');
		mc += '</table>'
		this.cal = mc;
	},
	
	show(){
		document.getElementById("cal").innerHTML = this.cal;
	}
	
} //nC

novemberCal.makeCal();
novemberCal.show();