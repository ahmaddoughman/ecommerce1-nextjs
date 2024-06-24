/** @type {import('next').NextConfig} */
const nextConfig = {
    images:{
        remotePatterns:[
          {
            protocol: 'https',
            hostname: "tinypng.com"
          }
        ]
      }
};

export default nextConfig;
