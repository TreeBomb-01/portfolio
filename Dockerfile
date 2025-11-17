# -------- 1. deps 단계 (npm install 캐시용) --------
FROM node:18 AS deps
WORKDIR /app

COPY package*.json ./
RUN npm install

# -------- 2. build 단계 --------
FROM node:18 AS builder
WORKDIR /app

COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN npm run build

# -------- 3. run 단계 (실행용, 더 가벼운 레이어) --------
FROM node:18 AS runner
WORKDIR /app

ENV NODE_ENV=production

# 런타임에 필요한 것만 복사
COPY --from=builder /app/package*.json ./
COPY --from=deps /app/node_modules ./node_modules
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public

EXPOSE 3000
CMD ["npm", "start"]
