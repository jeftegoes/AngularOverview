FROM node:22-alpine AS build
WORKDIR /src/app
COPY package*.json .
RUN npm ci

COPY . .
RUN npm run build

FROM node:22-alpine
WORKDIR /usr/app
RUN echo $(ls)
COPY --from=build /src/app/dist/with-ssr /usr/app/dist/with-ssr

CMD ["node", "dist/with-ssr/server/server.mjs"]

EXPOSE 4000