<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>News search</title>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
	
    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.6/css/bootstrap.min.css" integrity="sha384-rwoIResjU2yc3z8GV/NPeZWAv56rSmLldC3R/AZzGRnGxQQKnKkoFVhFQhNUwEyJ" crossorigin="anonymous">
	<link rel="stylesheet" href="style.css" />
</head>
<body>
	<h1>LIVE TOP AND BREAKING NEWS OF A COUNTRY</h1>
	<p id="body">
		<p>The 2-letter ISO 3166-1 code of the country you want to get headlines for. Possible options are: ae ar at au be bg br ca ch cn co cu cz de eg fr gb gr hk hu id ie il in it jp kr lt lv ma mx my ng nl no nz ph pl pt ro rs ru sa se sg si sk th tr tw ua us ve za </p>
		Country code:<input type="text" id="userinput"></input>
		<button type="button" id="submit" onclick="news()">Click Me!</button>
		<button type="button" onclick="showfav()">watch fav</button>
		<script src="main.js" type="text/javascript"></script>

	<div id="result"></div>
	<div id="fav"></div>
	<div id="list"></div>
	</p>
</body>
</html>