# Product Catalog

A fullstack product catalog built with **React**, **TypeScript**, **Express**, **Prisma**, and **PostgreSQL**.

This project was created as a study project to practice fullstack development, database integration, API design, and UI composition.

## Features

- Product list sidebar
- Product details view
- Search by product title
- Filter by category
- Sort by price
- Product image support
- PostgreSQL database integration
- Prisma migrations
- Prisma seed script
- Express REST API
- Frontend data fetching with React

## Tech Stack

### Frontend

- React
- TypeScript
- Vite
- Tailwind CSS

### Backend

- Express
- Prisma

### Database

- PostgreSQL
- Docker

## Project Structure

```txt
product-catalog/
  public/
    images/
    readme-images/
  server/
    prisma/
      schema.prisma
      migrations/
      seed.ts
    src/
      data/
      generated/
      lib/
      types/
    prisma.config.ts
    package.json
    pnpm-lock.yaml
    tsconfig.json
  src/
    components/
    types/
    data/
    types/
    App.tsx
    index.css
    main.tsx
  .editorconfig
  .gitignore
  docker-compose.yml
  eslint.config.js
  index.html
  package.json
  pnpm-lock.yaml
  README.md
  tsconfig.app.json
  tsconfig.json
  tsconfig.node.json
  vite.config.ts
```

## Screenshots

### Main Page

![Main page](./public/readme-images/main-page.png)

### Product Details

![Product details](./public/readme-images/product.png)

### Search Example

![Search example](./public/readme-images/search.png)

### Category Filter

![Category filter](./public/readme-images/category-sort-by-price.png)

## Getting Started

### 1. Clone the repository

```bash
git clone <your-repository-url>
cd product-catalog
```

### 2. Install frontend dependencies

```bash
pnpm install
```

### 3. Install backend dependencies

```bash
cd server
pnpm install
cd ..
```

### 4. Start PostgreSQL with Docker

```bash
docker compose up -d
```

### 5. Run Prisma migrations

```bash
cd server
pnpm prisma migrate dev
```

### 6. Seed the database

```bash
pnpm prisma db seed
```

### 7. Start the backend server

```bash
pnpm dev
```

### 8. Start the frontend

Open a new terminal in the project root:

```bash
pnpm dev
```

## Local URLs

### Frontend

`http://localhost:5173`

### Backend API

`http://localhost:3001/api/products`

## API Endpoint

### Get all products

```http
GET /api/products
```

Returns a JSON array of products from the PostgreSQL database.

## Database

The project uses PostgreSQL in Docker and Prisma as the ORM.

Main product fields:

- `id`
- `title`
- `price`
- `category`
- `inStock`
- `description`
- `imageUrl`
- `createdAt`

## What I Practiced

In this project I practiced:

- building a fullstack project structure
- working with PostgreSQL in Docker
- creating a Prisma schema
- generating and applying Prisma migrations
- writing a seed script
- building an Express API
- fetching backend data in React
- organizing a UI layout with Tailwind CSS
- connecting frontend and backend in one application

## Future Improvements

- responsive mobile layout
- better product availability states
- price range filter
- product creation/editing panel
- admin dashboard
- deployment

## Author

Made by **NetKamaa\_\_** 2026

GitHub: [NetKamaa\_\_](https://github.com/NetKamaa)  
LinkedIn: [Pavel](https://www.linkedin.com/in/pavel-doroshkevich-3518183a3/?isSelfProfile=true)
