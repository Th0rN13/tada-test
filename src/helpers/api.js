const api_url = process.env.VUE_APP_API_URL || `https://nane.tada.team/api/`;

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
		console.log(err);
		return null;
	}
}
