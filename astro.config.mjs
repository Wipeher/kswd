// @ts-check

import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { defineConfig, fontProviders } from 'astro/config';
import cloudflare from '@astrojs/cloudflare';
import rss from '@astrojs/rss';


// 1. 引入 Tailwind 的 Vite 插件
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
	site: 'https://example.com',
	integrations: [
    mdx(), 
    sitemap() // 自动生成站点地图（SEO 必备）
  ],
  
  // 2. 在 vite 配置中添加插件
  vite: {
    // plugins: /** @type {any} */ ([tailwindcss()]),
    plugins: [tailwindcss()],
  },
  output: 'static',  // 静态站点模式（默认）
	fonts: [
		{
			provider: fontProviders.local(),
			name: 'Atkinson',
			cssVariable: '--font-atkinson',
			fallbacks: ['sans-serif'],
			options: {
				variants: [
					{
						src: ['./src/assets/fonts/atkinson-regular.woff'],
						weight: 400,
						style: 'normal',
						display: 'swap',
					},
					{
						src: ['./src/assets/fonts/atkinson-bold.woff'],
						weight: 700,
						style: 'normal',
						display: 'swap',
					},
				],
			},
		},
	],
});
