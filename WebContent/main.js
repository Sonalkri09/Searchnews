//var url = 'https://newsapi.org/v2/top-headlines?' +
          //'country=us&' +
         // 'apiKey=bb5ba7c8064b42068db9d7cf9219bdad';

var data1="";
function news(){
alert ("Hello world!");
var api = 'https://newsapi.org/v2/top-headlines?';

var apikey = '0e8cc5ab21834bab8fe426640b727965';
var input = document.getElementById('userinput').value;
//console.log(input);

var url = api + 'country=' +input+'&'+'apiKey='+apikey;
var req = new Request(url);
fetch(req)
	.then(result=>result.json())
	.then((data)=>{
		
		 document.getElementById('result').innerHTML=printdata(data);
			
		
	})
	}

let printdata=function(data){
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
       htmlText += '<input type="submit" value="Add to Favorite" onClick="setData(this)" title=\"'+data.articles[i].title+'\"></input>';
       //htmlText += '<script type="text/javascript" src="main.js"></script>';
       /*htmlText += "<input type='submit' value='Add to Favourites' onclick=\"addToFavourites(this)\" " +
       "title=\""+json.articles[i].title+"\" " +
       "url=\"" +json.articles[i].url+"\" " +
       "urlToImage=\"" +json.articles[i].urlToImage+"\"" +
       "description=\"" +json.articles[i].description+"\"></div>";*/
       htmlText += '<hr>';
   }
document.getElementById('result').insertAdjacentHTML('afterend',htmlText);
};




let setData =function (input){
	
	alert("hi");
	var title= input.getAttribute('title');
	console.log(title);
	
	var xmlhttp = new XMLHttpRequest();
	var url1 ="http://localhost:8080/newsearch/MyServlet?title="+title;
	xmlhttp.open('GET',url1, true);
	xmlhttp.send();
	
	xmlhttp.onreadystatechange = function(){
		if(xmlhttp.readyState == 4 && xmlhttp.status == 200){
			//document.getElementById('fav').innerHTML = xmlhttp.responseText;
			document.getElementById('fav').insertAdjacentHTML('afterend',xmlhttp.responseText);
		}
	};
	
	
	 
};
