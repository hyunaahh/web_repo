<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@taglib uri="http://tiles.apache.org/tags-tiles" prefix="tiles" %>
<h3>template.jsp</h3>
<!-- 아래는 부트스트랩 다운받고 안에있는 index.html파일 내용 복사해 놓은것 -->

<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        <meta name="description" content="" />
        <meta name="author" content="" />
        <title>Simple Sidebar - Start Bootstrap Template</title>
        <!-- Favicon-->
        <link rel="icon" type="image/x-icon" href="assets/favicon.ico" />
        <!-- Core theme CSS (includes Bootstrap)-->
        <link href="css/styles.css" rel="stylesheet" />
    </head>
    <body>
        <div class="d-flex" id="wrapper">
            <!-- Sidebar : menu.jsp로 이동됨-->
            <tiles:insertAttribute name="menu"></tiles:insertAttribute>
            
            
            <div id="page-content-wrapper">
                <!-- Top navigation : header.jsp로 이동됨-->
                 <tiles:insertAttribute name="header"></tiles:insertAttribute>
                 
                 
                <div class="container-fluid">
                <!-- Page content : body.jsp로 이동됨-->
                     <tiles:insertAttribute name="body"></tiles:insertAttribute>
                    
                </div>
            </div>
        </div>
        
        <!-- Bootstrap core JS, Core theme JS : footer.jsp로 이동됨 -->
       	<tiles:insertAttribute name="footer"></tiles:insertAttribute>
    </body>
</html>
