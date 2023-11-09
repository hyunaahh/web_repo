<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>

<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt"%>
<jsp:include page="../layout/menu.jsp"></jsp:include>
<jsp:include page="../layout/header.jsp"></jsp:include>

<head>
<meta charset="UTF-8">
<title>Insert title here</title>


<script type="text/javascript"
	src="https://www.gstatic.com/charts/loader.js"></script>
<script type="text/javascript">
	google.charts.load("current", {
		packages : [ "corechart" ]
	});
	google.charts.setOnLoadCallback(drawChart);
	function drawChart() {
		//아래 데이터를 주기 위함. => fetch로!  서버에 데이터 요청해서 * 순차적으로 하려면 async쓰면 도ㅓㅣ거나 result안에 var data 넣거나
		fetch('drawChart.do')
		.then(resolve => resolve.json())
		.then(result => {
			console.log(result); //result : {객체타입}으로 들어가있음 -> 이걸 배열로 넣어주기!
			
			let dataAry = [['Writer', 'Cnt']];
			result.forEach(item => {
				dataAry.push([item.replyer, item.cnt]) // sql에서 소문자로 바꿔놔서 여기도 소문자 써줘야됨.
			})
					console.log(dataAry); //[배열]
			
			var data = google.visualization.arrayToDataTable(dataAry);

			var options = {
				title : '작성자 건수별',
				is3D : true,
			};

			var chart = new google.visualization.PieChart(document
					.getElementById('piechart_3d'));
			chart.draw(data, options);
		})
		.catch(err => console.log(err))
		
		
		
	}
</script>

</head>

<body>
	<div id="piechart_3d" style="width: 900px; height: 500px;"></div>
</body>

<jsp:include page="../layout/footer.jsp"></jsp:include>