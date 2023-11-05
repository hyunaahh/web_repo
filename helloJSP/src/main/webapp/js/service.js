//service.js


export default{
	//목록처리 - 함수를 매개값으로..! 
	async studentList(successCallback, errorCallback){ 
		let req = await fetch('../studentList.do');
		let json = await req.json();
		try{
			successCallback(json) 
		}catch(err){
			errorCallback(err)
		}
	},
	
	
	//한건 조회
	async getStudent(id, successCallback, errorCallback){
		let req = await fetch('../getStudent.do?sid='+ id);
		let json = await req.json();
		try{
			successCallback(json) 
		}catch(err){
			errorCallback(err)
		}
	},
	
	
	//등록 - addcallback 안에 있음.
	async addStudent(optObj, successCallback, errorCallback){ 
		let req = await fetch("../addStudent.do", optObj); // optObj : 사용자가 등록한 데이터.값
		let json = await req.json();
		try{
			successCallback(json) 
		}catch(err){
			errorCallback(err)
		}
	},
	
	
	//수정 (add랑 비슷하게.)
	async editStudent(obpObj, successCallback, errorCallback){ 
		let req = await fetch('../editStudent.do');
		let json = await req.json();
		try{
			successCallback(json) 
		}catch(err){
			errorCallback(err)
		}
	},
	
	
	//삭제
	async removeStudent(id, successCallback, errorCallback){ 
		let req = await fetch('../delStudent.do?sid='+ id);
		let json = await req.json();
		try{
			successCallback(json) 
		}catch(err){
			errorCallback(err)
		}
	}
	

	
} //end