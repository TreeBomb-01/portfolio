# ========== base deps (cache efficient) ==========
FROM node:18 AS deps
WORKDIR /app

# package.json만 복사 → npm install 캐시됨
COPY package*.json ./
RUN npm install --frozen-lockfile

# ========== builder ==========
FROM node:18 AS builder
WORKDIR /app

COPY --from=deps /app/node_modules ./node_modules
COPY . .

RUN npm run build

# ========== runner ==========
FROM node:18 AS runner
WORKDIR /app

ENV NODE_ENV=production

# Only runtime files
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/package*.json ./
COPY --from=deps /app/node_modules ./node_modules

EXPOSE 3000
CMD ["npm", "start"]
