/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/mypage',
        destination: '/mypage/place/bookmarks',
        permanent: true,
      },
      {
        source: '/mypage/place',
        destination: '/mypage/place/bookmarks',
        permanent: true,
      },
      {
        source: '/mypage/record',
        destination: '/mypage/record/timeline',
        permanent: true,
      },
    ];
  },
  images: {
    domains: ['cdn.pixabay.com', 'https://kauth.kakao.com'],
  },
};

module.exports = nextConfig;
