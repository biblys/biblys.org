import rss from '@astrojs/rss';
import { fetchPosts } from '~/utils/blog';
import { SITE } from 'astrowind:config';

export async function GET() {
  const posts = await fetchPosts();
  return rss({
    title: `Blog · ${SITE.name}`,
    description: 'Les dernières actualités sur Biblys',
    site: SITE.site,
    items: posts.map((post) => ({
      title: post.title,
      description: post.excerpt,
      pubDate: post.publishDate,
      link: `/blog/${post.slug}`,
    })),
  });
}
