FROM node:20-alpine AS build
# Install build dependencies for better-sqlite3 and other native modules
RUN apk update && apk add --no-cache build-base gcc autoconf automake zlib-dev libpng-dev vips-dev git python3

WORKDIR /opt/
COPY package.json package-lock.json ./
RUN npm install -g node-gyp
RUN npm ci

WORKDIR /opt/app
COPY . .
ENV NODE_ENV=production
RUN npm run build

# Final image stage
FROM node:20-alpine
RUN apk add --no-cache vips-dev tzdata
ENV NODE_ENV=production
WORKDIR /opt/
COPY --from=build /opt/node_modules ./node_modules
WORKDIR /opt/app
COPY --from=build /opt/app ./
ENV PATH=/opt/node_modules/.bin:$PATH

EXPOSE 1337
CMD ["npm", "run", "start"]
