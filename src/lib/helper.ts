export function formatDate(date: string | null) {
	if (!date) return '';
	const d = new Date(date);
	return d.toLocaleDateString('es-cr', {
		year: 'numeric',
		month: 'long',
		day: 'numeric'
	});
}
