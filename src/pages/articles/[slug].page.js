import fs from 'fs';
import path from 'path';
import { bundleMDX } from 'mdx-bundler';
import readingTime from 'reading-time';
import { formatTimecode } from '../../utils/formatTimecode'; // Adjust path as per your project structure

const POSTS_PATH = path.join(process.cwd(), 'posts');

export const getStaticProps = async ({ params }) => {
  const postFilePath = path.join(POSTS_PATH, `${params.slug}.mdx`);
  const source = fs.readFileSync(postFilePath, 'utf-8');

  const { code, frontmatter, matter } = await bundleMDX({
    source,
    mdxOptions(options) {
      options.remarkPlugins = [...(options.remarkPlugins ?? [])];
      // Add any necessary remarkPlugins here
      return options;
    },
  });

  const { time } = readingTime(matter.content);
  const timecode = formatTimecode(time);

  // Ensure that ogImage is defined and properly extracted from frontmatter
  const ogImage = frontmatter.ogImage || '/default-og-image.png';

  return {
    props: { code, frontmatter: { ...frontmatter, timecode, ogImage } },
    notFound: process.env.NODE_ENV === 'production' && frontmatter.draft,
  };
};
