
$(function(){
	var obj = {
		a	: 100,
		b	: 200,
		c	: 32,
		d	: 10
	};
	var num = '';
	function count(obj){
		for(var x in obj){
			num += (obj[x] * 100); 
		}
		alert(num);
	}
	count(obj);
});