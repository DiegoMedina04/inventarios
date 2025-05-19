FROM node:22.3.0-alpine3.20 as base

FROM base as stage-build
WORKDIR /app

ARG serverUrl=http://10.1.1.216:5000/api
ENV serverUrl=${serverUrl}

COPY package.json .
COPY package-lock.json .

RUN npm install

COPY . .

RUN node set-env.js

RUN npm run build --prod

FROM base as stage-prod

WORKDIR /app

COPY --from=stage-build /app/dist/mi-proyecto-angular /app/

EXPOSE 80

CMD [ "node","./server/server.mjs" ]