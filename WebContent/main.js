//var url = 'https://newsapi.org/v2/top-headlines?' +
          //'country=us&' +
         // 'apiKey=bb5ba7c8064b42068db9d7cf9219bdad';

var data="";
var count=0;
var favvalidation = 0;
//function news(){
//alert ("Hello world!");
//var api = 'https://newsapi.org/v2/top-headlines?';
//
//var apikey = '0e8cc5ab21834bab8fe426640b727965';
//var input = document.getElementById('userinput').value;
////console.log(input);
//
//var url = api + 'country=' +input+'&'+'apiKey='+apikey;
//var req = new Request(url);
//fetch(req)
//	.then(result=>result.json())
//	.then((data)=>{
//		
//		 document.getElementById('result').innerHTML=printdata(data);
//			
//		
//	})
//	}

function news() {
	var xmlHttp = new XMLHttpRequest();
	// retrieving the text from the search box
	var api = 'https://newsapi.org/v2/top-headlines?';

	var apikey = '0e8cc5ab21834bab8fe426640b727965';
	var input = document.getElementById('userinput').value;
	//console.log(input);

	var url = api + 'country=' +input+'&'+'apiKey='+apikey;
	xmlHttp.onreadystatechange = function() {
		// in case of 404 error
		if (this.status == 404) {
			document.getElementById('input').innerHTML = "404<br><h1>Movie Not Found</h1>";
		} else if (this.readyState == 4 && this.status == 200) {
			// storing the response
			var myArr = JSON.parse(this.responseText);
			data = myArr;
			// retrieving the response one by one
			var htmlText = '';
			   for ( var i=0;i<20;i++ ) {
			  	 console.log(data.articles[i].title);
			       htmlText += '<div class="div-conatiner">';
			       htmlText += '<div class="col_sm_4">';
			       htmlText += '<p class="p-name"> Author: ' + data.articles[i].author + '</p>';
			       htmlText += '<p class="p-loc">Title: ' + data.articles[i].title + '</p>';
			       htmlText += '<p class="p-desc"> Description: ' + data.articles[i].description + '</p>';
			       htmlText += '<p class="p-created"> Publised at: ' + data.articles[i].publishedAt + '</p>';
			       htmlText += '</div>';
			       
			       htmlText += '<div id="images"><img src='+data.articles[i].urlToImage+' height=500px width=500px></div>';
			       htmlText += '<a href='+data.articles[i].url+'>';
			       htmlText += '<input type="button" value="Visit Page" />';
			       htmlText += '</a>';
			       htmlText += '<input type="submit" value="Add to Favorite" onClick=addToFav('+i+')></input>';
			       
			       htmlText += '<hr>';
			   }
			document.getElementById('result').insertAdjacentHTML('afterend',htmlText);
		}
	};
	// sending request through get method
	xmlHttp.open("GET", url, true);
	xmlHttp.send();

}









function addToFav(i) {
	// applying condition if count<10 then only add to fav
	if (count < 10) {
		var xmlhttp = new XMLHttpRequest();
		alert(i);
		// setting the movie name added on page in response
		xmlhttp.onreadystatechange = function() {
			if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
				document.getElementById("fav").innerHTML = xmlhttp.responseText;
				count++;
				favvalidation = 1;
			}
		};
		// values to be sent to servlet
		var params = "title=" + data.articles[i].title ;
		
		// sending data to servlet
		xmlhttp.open('GET', "http://localhost:8080/newsearch/MyServlet?"+ params, true);
		xmlhttp.send();
	} 
}




function showfav() 
{
	// if it is 1 then only show fav else give msg to add fav first
	if (favvalidation == 1) 
	{
		var xmlhttp = new XMLHttpRequest();
		// clearing the page before showing the fav movie
		document.getElementById('result').innerHTML = "";
		
		xmlhttp.onreadystatechange = function() 
		{
			if (xmlhttp.readyState == 4 && xmlhttp.status == 200) 
			{
				// getting the response in a variable
				var myarr = JSON.parse(this.responseText);
				var html="";
				// showing the response on page
				for (var i = 0; i < myarr.length; i++) 
				{
					// creating dynamic card to show result
					html+="<p>"+myarr[i].title+"</p>"+"</div>"+ "<button id='favouritebutton' class='bg-primary' type='button' onClick=removeFromFav("+ i+ ") class='btn btn-sm btn-secondary'>Remove From Favourites</button>"+ "</div>";
					// displaying the dynamic element created
					document.getElementById('fav').insertAdjacentHTML('afterend', html);
				}
			}
		}
		// making xml call to servlet
		xmlhttp.open('GET',"http://localhost:8080/newsearch/FavList?", true);
		xmlhttp.send();
	}
}


//function to remove
function removeFromFav(i) 
{
	var xmlhttp = new XMLHttpRequest();
	alert(i);
	xmlhttp.onreadystatechange = function()
	{
		if (xmlhttp.readyState == 4 && xmlhttp.status == 200)
		{
			// showing the response on the page
			document.getElementById("fav").innerHTML = xmlhttp.responseText;
		}
	}
	// values to be sent to servlet
	var params = "title=" + data.articles[i].title;
	// sending value by get to servlet
	xmlhttp.open('GET', "http://localhost:8080/newsearch/RemoveNews?"
			+ params, true);
	xmlhttp.send();
}


