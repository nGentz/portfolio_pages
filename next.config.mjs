import createMDX from '@next/mdx';
import remarkGfm from 'remark-gfm';
import remarkToc from 'remark-toc';
import rehypeSlug from 'rehype-slug';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypePrettyCode from 'rehype-pretty-code';

const withMDX = createMDX({
  options: {
    remarkPlugins: [
      remarkGfm],
    rehypePlugins: [
      rehypeSlug,
      rehypeAutolinkHeadings,
      [rehypePrettyCode, {
        theme: 'github-light',
        keepBackground: false,
        showLineNumbers: true,
        defaultCopy: true,
      }],
    ],
  },
});

export default withMDX({
  pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'mdx'],
});