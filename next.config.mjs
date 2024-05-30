/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    async redirects(){
      return [
        {
          source: '/SuperBase',
          destination: 'https://www.pluggai.com/about',
          permanent: false
        },
        {
          source: '/Tutorial',
          destination: 'https://www.pluggai.com/page',
          permanent: false
        }
      ]
    }
  };
  
  export default nextConfig;
