/**
 *
 * AT-AT
 *
 * You should play with $unit-beta.
 *
 * "nth-letter"-something is provided by lettering.js
 * -> every letter is wrapped into a span!
 * http://letteringjs.com
 *
 *
 * 2013 by Tim Pietrusky
 * timpietrusky.com
 */


/* Lettering.JS 0.6.1 by Dave Rupert  - http://daverupert.com */
(function($){function injector(t,splitter,klass,after){var a=t.text().split(splitter),inject='';if(a.length){$(a).each(function(i,item){inject+='<span class="'+klass+(i+1)+'">'+item+'</span>'+after});t.empty().append(inject)}}var methods={init:function(){return this.each(function(){injector($(this),'','char','')})},words:function(){return this.each(function(){injector($(this),' ','word',' ')})},lines:function(){return this.each(function(){var r="eefec303079ad17405c889e092e105b0";injector($(this).children("br").replaceWith(r).end(),r,'line','')})}};$.fn.lettering=function(method){if(method&&methods[method]){return methods[method].apply(this,[].slice.call(arguments,1))}else if(method==='letters'||!method){return methods.init.apply(this,[].slice.call(arguments,0))}$.error('Method '+method+' does not exist on jQuery.lettering');return this}})(jQuery);  


$(".candybox2").lettering();


function boom() {
  console.log("boom!");
  document.getElementsByClassName("candybox2")[0].style.display = 'block';
  document.getElementsByClassName("svg")[0].style.display = 'none';
  var size = 20;
  while(document.getElementById("articlewrapper").offsetWidth > $(window).width()) {
    size--;
    shrink(size);
  }
}

function shrink(size) {
  for(let i of document.getElementsByClassName("candybox2")[0].childNodes) {
      console.log(i.style.fontSize)
      i.style.fontSize = size + "px";
  }
}

// setTimeout(function(){
//     document.getElementById('tooltip').setAttribute("id", "trans");
// }, 3000);