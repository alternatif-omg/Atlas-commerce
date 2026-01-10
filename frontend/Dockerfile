FROM node:20-alpine

WORKDIR /app

# copy hanya file package untuk cache layer installasi
COPY package.json package-lock.json ./

# install dependencies
RUN npm install
RUN npx update-browserslist-db@latest

# copy semua kode source
COPY . .

# expose port Vite default
EXPOSE 5173

# jalankan development server vite
CMD ["npm", "run", "dev"]
