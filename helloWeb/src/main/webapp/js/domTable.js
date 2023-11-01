//domTable.js

export default {
	
	hiddenFields : ['lat', 'lng'], // 화면엔 안보이게 할거임! hiddenFields
	
	makeHead: function(titles=['아이디', '센터명']){
		//thead>tr>th*n
		let thead = document.createElement('thead');
		let tr = document.createElement('tr');
		
			titles.forEach(title => {
				let th = document.createElement('th');
				th.innerHTML = title;
				tr.append(th) //** append = appendChild.
			})
		thead.append(tr);
		return thead
	},
	
	
	makeBody: function(dataAry=[]){
		let tbody= document.createElement('tbody');
		
			dataAry.forEach(item => {
				tbody.append(this.makeTr(item));
			})
		return tbody;
	},
	
	
	makeTr: function(center={}){
		let tr = document.createElement('tr');
		
		tr.setAttribute('data-lat', center.lat); // 두개 숨겼기 때문에 담아주려고. 나중에 가져오려고.
		tr.setAttribute('data-lng', center.lng); //tr.dataset이 data-블라블라 에 담아놓으면 가져올수 있음. => tr.dataset.lng라고 쓰면 데려올 수 있음.
		 	for(let prop in center){
				 //console.log('prop', prop);
				 if(this.hiddenFields.indexOf(prop) > -1){
					 continue;
				 }
				 let td = document.createElement('td');
				 td.innerHTML = center[prop];
				 tr.append(td);
			 }
		return tr;
		
	}
	

	
	
}