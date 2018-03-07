var data="";
var count=0;
var favvalidation = 0;


function news() {
	var xmlHttp = new XMLHttpRequest();
	var api = 'https://newsapi.org/v2/everything?';
	var apikey = '0e8cc5ab21834bab8fe426640b727965';
	var input = document.getElementById('userinput').value;
    var url = api + 'q=' +input+'&'+'apiKey='+apikey;
	xmlHttp.onreadystatechange = function() {
		
		if (this.status == 404) {
			document.getElementById('input').innerHTML = "404 news not found";
		} else if (this.readyState == 4 && this.status == 200) {
			
			var myArr = JSON.parse(this.responseText);
			data = myArr;
			var para = '';
			   for ( var i=0;i<20;i++ ) {
			  	 console.log(data.articles[i].title);
			       para += '<div class="div-conatiner">';
			       para += '<div class="col_sm_4">';
			       para += '<p> Author: ' + data.articles[i].author + '</p>';
			       para += '<p>Title: ' + data.articles[i].title + '</p>';
			       para += '<p> Description: ' + data.articles[i].description + '</p>';
			       para += '<p> Publised at: ' + data.articles[i].publishedAt + '</p>';
			       para += '</div>';
			       para += '<div id="images"><img src='+data.articles[i].urlToImage+' height=500px width=500px></div>';
			       para += '<a href='+data.articles[i].url+'>';
			       para += '<input type="button" value="Visit Page" />';
			       para += '</a>';
			       para += '<input type="submit" value="Add to Favorite" onClick=addToFav('+i+')></input>';
			       para += '<hr>';
			   }
			document.getElementById('result').insertAdjacentHTML('afterend',para);
		}
	};
	xmlHttp.open("GET", url, true);
	xmlHttp.send();

}

function addToFav(i) {
	if (count < 10) {
		var xmlhttp = new XMLHttpRequest();
		alert(i);
		
		xmlhttp.onreadystatechange = function() {
			if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
				document.getElementById("fav").innerHTML = xmlhttp.responseText;
				count++;
				favvalidation = 1;
			}
		};
		var params = "title=" + data.articles[i].title ;
		xmlhttp.open('GET', "http://localhost:8080/newsearch/MyServlet?"+ params, true);
		xmlhttp.send();
	}
}

function showfav() 
{
	if (favvalidation == 1) 
	{
		var xmlhttp = new XMLHttpRequest();
		xmlhttp.onreadystatechange = function() 
		{
			if (xmlhttp.readyState == 4 && xmlhttp.status == 200) 
			{
				var arr = JSON.parse(this.responseText);
				for (var i = 0; i < arr.length; i++) 
				{
					var html="<div>"+"<p>"+arr[i].title+"</p>"+"<button id='favouritebutton' " +
							"type='button' onClick='removeFromFav("+i+")'>Remove From Favourites</button>"+"</div>";
					document.getElementById('list').insertAdjacentHTML('afterend', html);
				}
			}
		}
		xmlhttp.open('GET',"http://localhost:8080/newsearch/FavList?", true);
		xmlhttp.send();
	}
}


function removeFromFav(i) {
	alert(i);
	var xmlhttp = new XMLHttpRequest();
	xmlhttp.onreadystatechange = function() {
		if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
			//document.getElementById("errormsg").innerHTML = xmlhttp.responseText;
			document.getElementById("favouritebutton"+i).disabled = false;
		}
	}	
	var params = "index="+i;
	xmlhttp.open('GET', "http://localhost:8082/newsearch/RemoveNews?"+params, true);
	xmlhttp.send();
}

