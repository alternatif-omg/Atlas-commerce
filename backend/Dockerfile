FROM node:20-alpine

# Set working directory
WORKDIR /app

# Copy dependency files first (for layer caching)
COPY package.json package-lock.json ./

# Install dependencies
RUN npm install

# Copy all backend source code
COPY . .

# Expose API port
EXPOSE 3000

# Start in production mode
CMD ["npm", "run", "start"]
