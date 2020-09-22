export const format = num => {
	if (isNaN(num)) return
	try {
		return (
			'0'.repeat(2 - String(Math.floor(num / 60)).length) + Math.floor(num / 60) + ':' + '0'.repeat(2 - String(Math.floor(
				num % 60)).length) + Math.floor(num % 60)
		);
	} catch (e) {
		return (
			'0'.repeat(3 - String(Math.floor(num / 60)).length) + Math.floor(num / 60) + ':' + '0'.repeat(2 - String(Math.floor(
				num % 60)).length) + Math.floor(num % 60)
		);
	}
}
