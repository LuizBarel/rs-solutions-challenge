import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
    async rewrites() {
        return [
            {
                source: '/',
                destination: '/dashboard',
            },
        ];
    },
};

export default nextConfig;
