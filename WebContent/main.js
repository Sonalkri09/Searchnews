//var url = 'https://newsapi.org/v2/top-headlines?' +
          //'country=us&' +
         // 'apiKey=bb5ba7c8064b42068db9d7cf9219bdad';
function news(){
alert ("Hello world!");
var api = 'https://newsapi.org/v2/top-headlines?';
//var city = '';
var apikey = '0e8cc5ab21834bab8fe426640b727965';
var input = document.getElementById('userinput').value;
console.log(input);

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
	var data1 =[];
    for ( var i=0;i<20;i++ ) {
   	 //console.log(data.results[i].title);
        htmlText += '<div class="div-conatiner">';
        htmlText += '<div class="col_sm_4">';
        htmlText += '<p class="p-name"> Author: ' + data.articles[i].author + '</p>';
        htmlText += '<p class="p-loc">Title: ' + data.articles[i].title + '</p>';
        htmlText += '<p class="p-desc"> Description: ' + data.articles[i].description + '</p>';
        htmlText += '<p class="p-created"> Publised at: ' + data.articles[i].publishedAt + '</p>';
        htmlText += '</div>';
        
        htmlText += '<div><img src='+data.articles[i].urlToImage+'></div>';
        htmlText += '<a href='+data.articles[i].url+'>';
        htmlText += '<input type="button" value="Visit Page" />';
        htmlText += '</a>';
       
        
       data1[i]=data.articles[i].title;
        htmlText += '<button onClick=incount(data1,1) >Add to favourites</button>';
        //htmlText += '<script type="text/javascript" src="function1.js"></script>';
        htmlText += '<hr>';
    }
document.getElementById('result').insertAdjacentHTML('afterend',htmlText);
}


function incount(data1,p){
	alert("hello");
	console.log(data1);
}