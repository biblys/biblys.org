import { readdir, readFile, writeFile } from 'fs/promises';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';
import yaml from 'js-yaml';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, '..');

const SOURCE = '/Users/clement/Developer/biblys/blog/src/content/posts';
const TARGET = join(ROOT, 'src/content/blog');

const SKIP = new Set(['biblys-est-desormais-un-logiciel-libre.md']);

function transformFrontmatter(data) {
  const result = { ...data };

  // date → publishDate
  if (result.date !== undefined) {
    result.publishDate = result.date;
    delete result.date;
  }

  // author object → string
  if (result.author && typeof result.author === 'object' && result.author.name) {
    result.author = result.author.name;
  }

  // image: /assets/blog/... → ~/assets/images/blog/...
  if (typeof result.image === 'string' && result.image.startsWith('/assets/blog/')) {
    result.image = result.image.replace('/assets/blog/', '~/assets/images/blog/');
  }

  // supprimer ogImage
  delete result.ogImage;

  return result;
}

function parseMarkdown(content) {
  const match = content.match(/^---\n([\s\S]*?)\n---\n([\s\S]*)$/);
  if (!match) return { frontmatter: {}, body: content };
  const frontmatter = yaml.load(match[1]);
  const body = match[2];
  return { frontmatter, body };
}

function serializeFrontmatter(data) {
  return `---\n${yaml.dump(data, { lineWidth: -1 })}---\n`;
}

async function main() {
  const files = await readdir(SOURCE);
  const mdFiles = files.filter((f) => f.endsWith('.md'));

  let migrated = 0;
  let skipped = 0;

  for (const file of mdFiles) {
    if (SKIP.has(file)) {
      console.log(`⏭  Ignoré : ${file}`);
      skipped++;
      continue;
    }

    const raw = await readFile(join(SOURCE, file), 'utf-8');
    const { frontmatter, body } = parseMarkdown(raw);
    const transformed = transformFrontmatter(frontmatter);
    const output = serializeFrontmatter(transformed) + body;

    await writeFile(join(TARGET, file), output, 'utf-8');
    migrated++;
  }

  console.log(`\n✅ ${migrated} billets migrés, ${skipped} ignoré(s).`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
