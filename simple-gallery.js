/** jQuery Simple Gallery Plugin
  * @version: 1.00
  * @author: Pablo E. Fernández (islavisual@gmail.com).
  * Copyright 2016 Islavisual. 
  * Licensed under MIT (https://github.com/islavisual/Simple-Gallery/blob/master/LICENSE). 
  * Last update: 13/09/2016
  **/
var items = jQuery('.simple-gallery div[data-src]');
var cItems = items.length;
for(var x = 0; x < cItems; ++x){
	var item = jQuery(items[x]);
	
	var dataChild = typeof item.data('child-type') != "undefined"?item.data('child-type'):"";
	var dataTitle = typeof item.data('title') != "undefined"?item.data('title'):"";
	var dataDesc  = typeof item.data('description') != "undefined"?item.data('description'):"";
	var dataSrc   = typeof item.data('src') != "undefined"?item.data('src'):"";
	var dataThumb = typeof item.data('thumb') != "undefined"?item.data('thumb'):"";

	var buttons  = '<a class="button_close"></a>';
	if(x < cItems - 1) buttons += '<a onclick="jQuery(\'.button_close\').click(); jQuery(\'#image'+(x+2)+'\').click()" class="button_next">&gt;</a>';
	if(x > 0) buttons += '<a onclick="jQuery(\'.button_close\').click(); jQuery(\'#image'+(x)+'\').click()" class="button_prev">&lt;</a>';
	
	var dd = "";
	if(dataDesc != "" && dataTitle != "") dd = '<span class="description"><span class="title">'+dataTitle+'</span>'+dataDesc+'</span>';
	else if(dataDesc != "") dd = '<span class="description">'+dataDesc+'</span>';
	else if(dataTitle != "") dd = '<span class="description"><span class="title">'+dataTitle+'</span></span>';
	
	var tmp = '<'+dataChild+' class="item"><a id="image'+(x+1)+'" class="image-link"><img src="'+dataThumb+'" class="thumbnail" /><span class="full"><img src="'+dataSrc+'" />'+dd+'</span></a>'+buttons+'</'+dataChild+'>';
	jQuery('.simple-gallery').append(tmp);
	
	// If home then add auto-resposive
	if(jQuery("body").hasClass("home")) jQuery('.item').addClass("col-xs-12 col-sm-6 col-md-3 col-lg-3");
}

jQuery('.simple-gallery .button_close, simple-.gallery .full').on("click", function(){   jQuery(this).prev().removeClass("target"); });
jQuery('.simple-gallery a.image-link').on('click', function(){ jQuery(this).addClass("target"); });
items.remove();
