import { supabase } from '$lib/db/supabaseClient';

export async function downloadImage(path: string) {
	if (!path) return null;
	try {
		const { data, error } = await supabase.storage.from('images').download(path);
		if (error) {
			throw error;
		}

		const url = URL.createObjectURL(data);
		return url;
	} catch (error) {
		if (error instanceof Error) {
			console.log('Error downloading image: ', error.message);
		}
		return null;
	}
}
