import type { CollectionEntry } from 'astro:content';
import { getCollection } from 'astro:content';

export async function getSortedPosts(): Promise<CollectionEntry<'blog'>[]> {
	const posts = await getCollection('blog');
	return posts.sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf());
}
