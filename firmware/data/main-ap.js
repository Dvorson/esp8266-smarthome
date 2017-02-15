$(document).ready(() => {
	let connection = new WebSocket('ws://192.168.0.174/ws', ['soap']);
	$.get('networks', (data) => console.log(data));
});