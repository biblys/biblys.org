import { fetchPosts } from '~/utils/blog';
import { findImage } from '~/utils/images';
import { SITE } from 'astrowind:config';

const toAbsoluteUrl = (path: string) =>
  path.startsWith('http://') || path.startsWith('https://') ? path : `${SITE.site}${path}`;

export async function GET() {
  const posts = (await fetchPosts()).slice(0, 3);

  const news = await Promise.all(
    posts.map(async (post) => {
      const resolvedImage = await findImage(post.image);
      const imageSrc = typeof resolvedImage === 'string' ? resolvedImage : resolvedImage?.src;

      return {
        title: post.title,
        description: post.excerpt ?? '',
        url: `${SITE.site}/${post.permalink}`,
        ...(imageSrc ? { image: toAbsoluteUrl(imageSrc) } : {}),
        date: post.publishDate.toISOString().slice(0, 10),
      };
    })
  );

  return new Response(JSON.stringify(news, null, 2), {
    headers: { 'Content-Type': 'application/json' },
  });
}
