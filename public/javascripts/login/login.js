$(function(){
	$('#logIn').click(function(event) {
		/* Act on the event */
		var data={
			'user' : $('#userName').val(),
			'password' : $('#password').val()
		};
		$.ajax({
			method : 'post',
			url : '/login',
			data:data
		   }).success(function(resp){
		   		console.log(resp.code);
		   		var data = resp.data;
		   		console.log(data.name);
		   		if(resp.code===0){
		   			window.location.href="../home";
		   		}
		   }).error(function() {
		   	/* Act on the event */
		   		console.log('aa');
		   });
	});
})