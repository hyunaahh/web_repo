const table = {
	
	makeHead(titles = []){
		let hd = '<thead><tr>';
		titles.forEach(item => {
			hd += '<th>' + item + '</th>'
		})
		hd += "</tr></thead>"
		return hd;
	},
	
	makeBody(dataArr = [{}]){
		let bd = "<tbody id='body'>";
		dataArr.forEach(item => {
			bd += this.makeTr(item)
		})
		bd += '</tbody>'
		return bd;
	},
	
	makeTable(titleArr, dataArr){
		let tb = '<table border="1">';
		tb += this.makeHead(titleArr) + this.makeBody(dataArr)
		tb += '</table>'
		return tb;
	},
	
	makeTr(book=[]){
		let mt = '<tr>'
		for(let prop in book){
			mt += '<td>' + book[prop] + '</td>'
		}
		mt += '</tr>'
		return mt;
	}
} //table

export { table }