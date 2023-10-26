//calendar => table
	
	const today = new Date();
	console.log('오늘 날짜 : ', today.getDate());
	//today.setDate(22);
	
		const cal = {

			//요일
			makeHead() {
				let day = ['일', '월', '화', '수', '목', '금', '토'];
				let hd = '';
				hd += '<thead>';
				hd += '<tr>';

				day.forEach(function (day) {
					hd += '<th style = "background:pink">' + day + '</th>'
				});
				hd += '</tr>';
				hd += '</thead>';
				
				return hd;

			},

	
			
			makeBody(){
				let bd = '';
				bd += '<tbody><tr>'
				for (let i = 1; i <= 31; i++){
					
					if(i % 7 == 1){
						bd += '<td style = "background: red; color: yellow"; align ="right">' + i + '</td>'
					} else if(i == today.getDate()){
						bd+= '<td style = "background: green; color: yellow"; align ="right">' + i + '</td>'
					}else if(i % 7 == 0){
						bd+= '<td style = "background: blue; color: yellow"; align ="right">' + i + '</td>'
					}else {
						bd += '<td align ="right">' + i + '</td>'    
					}
				
					
				
	             	if (i % 7 == 0) { // 줄바꿈
	                   bd += '</tr><tr>'
	                   } // if	
	                } //for
	                
	           bd += '</tr></tbody>'        
				return bd;
			},
			
			
			
	
		

			//넣어주고
			makeCalendar() {
				let tb = '<table border="1">'
				tb += [1].reduce((acc, day) => acc + this.makeHead() + this.makeBody(), '')

				tb += '</table>'
				this.table = tb;
			},

			//화면에 보이게! 
			showCal(dom) {
				dom.innerHTML = this.table;
			}

		}

		cal.makeCalendar();
		cal.showCal(document.getElementById('show'));





