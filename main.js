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
		//document.getElementById('result').innerHTML=JSON.stringify(data.articles[0].author);
		document.getElementById('result').innerHTML=JSON.stringify(data);
	})
    }