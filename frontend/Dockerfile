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

# ---------------- Build Stage ----------------
FROM node:18-alpine AS build

WORKDIR /app

# Copy only package.json + lock first
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the app (including src, public, etc.)
COPY . .

# Optional: Fix Windows CRLF issues (if files were copied from Windows)
RUN find . -type f -exec dos2unix {} \; || true

# Set environment variable if needed (overridden by build-arg)
ARG REACT_APP_API_URL
ENV REACT_APP_API_URL=$REACT_APP_API_URL

# Build the React app
RUN npm run build

# ---------------- Serve Stage ----------------
FROM nginx:alpine

# Copy build output to Nginx's default public folder
COPY --from=build /app/build /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# Start Nginx in foreground
CMD ["nginx", "-g", "daemon off;"]
