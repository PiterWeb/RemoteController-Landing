import { json } from '@sveltejs/kit';
import type { Explore } from '$lib/types';

async function getExplores(): Promise<Explore[]> {
	const explores: Explore[] = [];

	const paths = import.meta.glob('/src/routes/api/info/*/*.md', { eager: true });

	for (const path in paths) {
		const file = paths[path];
		const slug = path.split('/').at(-1)?.replace('.md', '');

		if (file && typeof file === 'object' && 'metadata' in file && slug) {
			const metadata = file.metadata as Omit<Explore, 'slug'>;
			const explore = { ...metadata, slug } satisfies Explore;
			explore.published && explores.push(explore);
		}
	}

	return explores;
}

export async function get() {
	const explores = await getExplores();

	return json(explores);
}
