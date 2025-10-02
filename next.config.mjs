// next.config.mjs
import createMDX from '@next/mdx';
import remarkGfm from 'remark-gfm';
import rehypeSlug from 'rehype-slug';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypePrettyCode from 'rehype-pretty-code';

const repo = 'portfolio_pages';
const isProd = process.env.NODE_ENV === 'production';

const withMDX = createMDX({
  options: {
    remarkPlugins: [remarkGfm],
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

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  // needed for project pages: https://<user>.github.io/<repo>/
  basePath: isProd ? `/${repo}` : '',
  assetPrefix: isProd ? `/${repo}/` : '',
  images: { unoptimized: true },     // next/image works on static export
  trailingSlash: true,               // ensures /route/ -> route/index.html
  pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'mdx'],
};

export default withMDX(nextConfig);
