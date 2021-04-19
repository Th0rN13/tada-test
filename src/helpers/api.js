const server_url = process.env.VUE_APP_SERVER_URL || 'nane.tada.team';
const api_url = process.env.VUE_APP_API_URL || `https://${server_url}/api/`;
const wss_url = process.env.VUE_APP_WSS_URL || `wss://${server_url}/ws`;

export async function getRooms() {
	const result = await getRequest(`${api_url}rooms`);
	return result;
}

export async function getSettings() {
	const result = await getRequest(`${api_url}settings`);
	return result;
}

export async function getRoomHistory(room) {
	const result = await getRequest(`${api_url}rooms/${room}/history`);
	return result;
}

async function getRequest(url) {
	try {
		const response = await fetch(url);
		if (!response.ok) throw new Error(response.statusText);
		const result = await response.json();
		return result;
	} catch (err) {
		console.log('Catch error:', err);
		return null;
	}
}

let ws;

export function connectWebSocket(name = 'anonymous', connectCb, messageCb) {
	if (ws) {
		ws.onclose = () => {};
		ws.close(1000, 'user change name');
	}
	ws = new WebSocket(`${wss_url}?username=${name}`);
	ws.onopen = () => {
		connectCb(true);
	};
	ws.onclose = () => {
		connectCb(false);
		setTimeout(() => {
			connectWebSocket(name, connectCb, messageCb);
		}, 500);
	};
	ws.onmessage = (event) => {
		try {
			const message = JSON.parse(event?.data);
			messageCb(message);
		} catch (err) {
			console.log('Catch error:', err);
		}
	};
	return ws;
}

export function sendMessage(room, text, id) {
	ws.send(JSON.stringify({ room, text, id }));
}

export function ping() {
	ws.send(JSON.stringify({ ping: true }));
}
