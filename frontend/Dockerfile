# # ---------------- Build Stage ----------------
# FROM node:18 AS build

# WORKDIR /app

# # Copy only package.json + lock first
# COPY package*.json ./

# # Install dependencies (include devDependencies)
# RUN npm install

# # Copy rest of app (including src, public, etc.)
# COPY . .

# # Fix: Ensure react-scripts is executable after copying entire project
# RUN chmod +x ./node_modules/.bin/react-scripts

# # Build the frontend app
# RUN npm run build

# # ---------------- Serve Stage ----------------
# FROM nginx:alpine

# COPY --from=build /app/build /usr/share/nginx/html

# EXPOSE 80

# CMD ["nginx", "-g", "daemon off;"]

# frontend/Dockerfile
FROM node:18-alpine AS build

WORKDIR /app
COPY package*.json ./
RUN npm install

COPY . .
ARG REACT_APP_API_URL
ENV REACT_APP_API_URL=$REACT_APP_API_URL
RUN npm run build

FROM nginx:alpine
COPY --from=build /app/build /usr/share/nginx/html
