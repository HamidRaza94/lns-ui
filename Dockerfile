# Build container

FROM node:alpine as builder
WORKDIR /app
COPY . .
RUN npm i
RUN npm run build

# Run container
FROM nginx:alpine

# Nginx configuration
RUN rm -rf /etc/nginx/conf.d
COPY nginx.conf /etc/nginx

# Static build
COPY --from=builder /app/build /var/www

# Copy shell script to container
WORKDIR /var/www
COPY env.sh .
COPY .env .
RUN ls

# Add bash
RUN apk add --no-cache bash

# Make our shell script executable
RUN chmod +x env.sh

# Start Nginx server
CMD ["/bin/bash", "-c", "/var/www/env.sh && nginx -g \"daemon off;\""]

