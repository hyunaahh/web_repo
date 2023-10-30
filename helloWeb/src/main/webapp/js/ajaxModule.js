//ajaxModule.js

const table ={
	
	makeHead(titles = ['회원아이디', '비밀번호', '이름','연락처']){
		let headTag = "<thead><tr>";
		titles.forEach(title => {
			headTag += '<th>'+title+'</th>'
		})
		headTag += "</tr></thead>";
		return headTag;
	},
	
	//data 타입은 객체타입.[{}]
	/*makeBody(dataAry = [{mid, pass, name, phone}]){
		let bodyTag = "<tbody id='list'>"
		dataAry.forEach(item => {
			bodyTag += "<tr>"
			for(let prop in item){
			bodyTag += "<td>"+item[prop]+"</td>"
			}
			bodyTag += "</tr>"
		})
		bodyTag += "</tbody>"
		return bodyTag;
	},*/
		makeBody(dataAry = [{mid, pass, name, phone}]){
			let bodyTag = "<tbody id='list'>"
			dataAry.forEach(item => {
				bodyTag += this.makeTr(item)
				})
			bodyTag += "</tbody>"
			return bodyTag;
		},
	

	makeTable(titleAry, dataAry){
		let tableTag = "<table border ='1'>";
		tableTag += this.makeHead(titleAry) + this.makeBody(dataAry)
		tableTag += "</table>"
		return tableTag;
	}, 
	
	makeTr(member=[]){
		let trTag = "<tr onclick='showInfo(event, this)'>";
		for (let prop in member){
			trTag += '<td>' + member[prop] + '</td>';
		}
		trTag+= '</tr>'
		return trTag;
	}
		
}//table

export { table }