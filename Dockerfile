# Use the official Node.js image as the base image
FROM node:16-alpine

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to the container
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code to the container
COPY . .

# Build the React app
RUN npm run build

# Use a lightweight HTTP server to serve the built files
RUN npm install -g serve
CMD ["serve", "-s", "build", "-l", "3000"]

# Expose port 3000
EXPOSE 3000
