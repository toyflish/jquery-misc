/*!
 * jQuery serializeObject - v0.2 - 1/20/2010
 * http://benalman.com/projects/jquery-misc-plugins/
 * 
 * Copyright (c) 2010 "Cowboy" Ben Alman
 * Dual licensed under the MIT and GPL licenses.
 * http://benalman.com/about/license/
 */

// Whereas .serializeArray() serializes a form into an array, .serializeObject()
// serializes a form into an (arguably more useful) object.

// serializes only field-names specified in attr-array into Object

(function($,undefined){
  '$:nomunge'; // Used by YUI compressor.
  
  $.fn.selectiveSerializeObject = function(attrs_mask){
    var obj = {};
    $.each( this.serializeArray(), function(i,o){
      var n = o.name, v = o.value;
  		if (jQuery.inArray(n, attrs_mask) != -1) {
      	obj[n] = obj[n] === undefined ? v : $.isArray( obj[n] ) ? obj[n].concat( v ) : [ obj[n], v ];
			}
    });
    
    return obj;
  };
  
})(jQuery);
