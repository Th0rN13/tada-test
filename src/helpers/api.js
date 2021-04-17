const api_url = process.env.VUE_APP_API_URL || `https://nane.tada.team/api/`;

export async function getRooms() {
	const result = await fetch(`${api_url}rooms`).then((res) => res.json());
	return result;
}
