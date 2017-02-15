$(document).ready(() => {
	let connection = new WebSocket('ws://192.168.0.174/ws', ['soap']);

	$('.relayOn').click((e) => {
		$.get('relay/on', (data) => console.log(data));
	});

	$('.relayOff').click((e) => {
		$.get('relay/off', (data) => console.log(data));
	});

	connection.onopen = function () {
		$('.submit').click((e) => {
			const val = $('.wsinput').val();
			connection.send(val);
			$('.messages').append(`
				<div class="row">
			  		<div class="col-12">
			  			<p class="card-text text-left">
			  				${val}
			  			</p>
			  		</div>
			  	</div>`
			);
			$('.wsinput').val('');
		});
	};
	connection.onerror = function (error) {
	  console.log('WebSocket Error ' + error);
	};
	connection.onmessage = function (e) {
	  console.log('Server: ' + e.data);
	  $('.messages').append(
	  	`<div class="row">
	  		<div class="col-12">
	  			<p class="card-text text-right">
	  				${e.data}
	  			</p>
	  		</div>
	  	</div>`);
	};
});