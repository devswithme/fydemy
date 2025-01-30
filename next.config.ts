import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
	/* config options here */
	output: 'export',
	images: {
		unoptimized: true,
		path: '/',
		loader: 'imgix',
	},
	assetPrefix: '',
	env: {
		NEXT_PUBLIC_PWD: '123',
	},
}

export default nextConfig
