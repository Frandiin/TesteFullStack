## Backend Setup

1. Navigate to the backend directory:

```bash
cd backend
```

2. Install dependencies:

```bash
npm install
```

3. Create a `.env` file in the backend directory with your MySQL database connection:

```
DATABASE_URL="mysql://user:password@localhost:3306/your_database"
```

4. Run Prisma migrations:

```bash
npx prisma migrate dev
```

5. Start the development server:

```bash
npm run dev
```

The server will start on http://localhost:3000

## API Endpoints

### Products

- GET `/api/products` - Get all products
- GET `/api/products/:id` - Get a specific product
- GET `/api/products/:id/skus` - Get SKUs for a specific product
- GET `/api/products/:id/images` - Get images for a specific product
- GET `/api/products/:id/colors` - Get colors for a specific product
