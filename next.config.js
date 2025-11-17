/** @type {import('next').NextConfig} */
const nextConfig = {
  // Standalone 모드 활성화 (Docker 최적화)
  output: 'standalone',
  
  // 이미지 최적화
  images: {
    unoptimized: true, // 정적 배포용
  },
  
  // 불필요한 기능 비활성화
  swcMinify: true,
  
  // 프로덕션 최적화
  poweredByHeader: false,
  compress: true,
  
  // 환경 변수
  env: {
    NEXT_TELEMETRY_DISABLED: '1',
  },
};

export default nextConfig;