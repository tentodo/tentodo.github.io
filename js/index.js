(function(d){var h=[];d.loadImages=function(a,e){"string"==typeof a&&(a=[a]);for(var f=a.length,g=0,b=0;b<f;b++){var c=document.createElement("img");c.onload=function(){g++;g==f&&d.isFunction(e)&&e()};c.src=a[b];h.push(c)}}})(Zepto);

$(document).ready(function() {
r = function() {
if($(window).width() > 960) {
$('.img').attr('src', (window.devicePixelRatio > 1) ? 'images/icon-90.png' : 'images/icon-45.png');

$('.img-2').attr('src', (window.devicePixelRatio > 1) ? 'images/White_iPhone_Face-978.png' : 'images/White_iPhone_Face-489.png');

$('.img-3').attr('src', (window.devicePixelRatio > 1) ? 'images/Download_on_the_App_Store_Badge_US-UK_135x40-496.png' : 'images/Download_on_the_App_Store_Badge_US-UK_135x40-248.png');

$('.img-4').attr('src', (window.devicePixelRatio > 1) ? 'images/madewithsparkle-422.png' : 'images/madewithsparkle-211.png');
}
else if($(window).width() > 320) {
$('.img').attr('src', (window.devicePixelRatio > 1) ? 'images/icon-60.png' : 'images/icon-30.png');

$('.img-2').attr('src', (window.devicePixelRatio > 1) ? 'images/White_iPhone_Face-424.png' : 'images/White_iPhone_Face-212.png');

$('.img-3').attr('src', (window.devicePixelRatio > 1) ? 'images/Download_on_the_App_Store_Badge_US-UK_135x40-264.png' : 'images/Download_on_the_App_Store_Badge_US-UK_135x40-132.png');

$('.img-4').attr('src', (window.devicePixelRatio > 1) ? 'images/madewithsparkle-138.png' : 'images/madewithsparkle-69.png');
}
};
$(window).resize(r);
r()

});