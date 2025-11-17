# base.dockerfile
# 포트폴리오 사이트용 경량 베이스 이미지
# 이미지 빌드: docker build -f base.dockerfile -t treebomb-portfolio-base:latest .

FROM node:20-alpine AS base

# 최소한의 시스템 패키지만 설치
RUN apk add --no-cache libc6-compat

# 작업 디렉토리 설정
WORKDIR /app

# npm 캐시 최적화
RUN npm config set fetch-retry-mintimeout 20000 && \
    npm config set fetch-retry-maxtimeout 120000

LABEL maintainer="treebomb"
LABEL description="Lightweight Next.js 14 Base Image for Portfolio"