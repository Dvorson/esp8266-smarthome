$(document).ready(() => {

	$('.relayOn').click((e) => {
		$.get('http://192.168.1.174/on', (data) => console.log(data));
	});

	$('.relayOff').click((e) => {
		$.get('http://192.168.1.174/off', (data) => console.log(data));
	});
});