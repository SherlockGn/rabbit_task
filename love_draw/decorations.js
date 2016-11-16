function insertDec(url, delay, posx, posy, size) {
	var body = $("body");
	var width = document.body.clientWidth;
	var height = document.body.clientHeight;
	var imgstr = '<img src="'+url+'" style="opacity: 0; width:'+size+'px; position: absolute; margin-left: '+width/posx+'; margin-top: '+height/posy+'"></img>';
	var img = $(imgstr);
	body.append(img);
	setTimeout(function() {
		img.animate({opacity: 1}, 5000);
	}, delay);
}

function insertDecorations() {
	insertDec('dec1.png', 500, 1.2, 1.6, 140);
	insertDec('dec2.png', 2500, 6, 1.6, 140);
	insertDec('dec3.png', 4500, 1.25, 40, 140);
}