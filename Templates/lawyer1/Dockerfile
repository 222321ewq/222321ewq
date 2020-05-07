FROM node:alpine as builder
ARG API_URL
ENV REACT_APP_API_URL=$API_URL
WORKDIR /app
COPY package.json ./
RUN echo REACT_APP_API_URL=${REACT_APP_API_URL} > .env
RUN npm install
COPY . .
RUN npm run build

FROM nginx:1.17.8
EXPOSE 3000
COPY ./nginx/default.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /app/build /usr/share/nginx/html
