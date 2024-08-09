export function formatDate(date: string | null): string {
	if (!date) return '';
	const d = new Date(date);
	return d.toLocaleDateString('es-ES', {
		year: 'numeric',
		month: 'long',
		day: 'numeric'
	});
}

// Remove HTML tags from string and returns string with no more than 140 characters.
// Finishes with an ellipsis if the string is longer than 140 characters but do not cut words
export function getExcerpt(content: string): string {
	let excerpt = content.replace(/<[^>]*>/g, '');
	if (excerpt.length > 140) {
		excerpt = excerpt.slice(0, 140).trim();
		const lastSpace = excerpt.lastIndexOf(' ');
		if (lastSpace > 0) {
			excerpt = excerpt.slice(0, lastSpace) + '...';
		}
	}
	return excerpt;
}
