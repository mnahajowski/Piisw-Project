FROM node:16-alpine AS build

WORKDIR /src
COPY package.json .

RUN npm i

COPY . .

RUN npm run ng build

FROM nginx:1.21

COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /src/dist/frontend /usr/share/nginx/html
