# DOCHY - Ecommerce Store

Modern, high-converting ecommerce website built with Next.js, TypeScript, and Tailwind CSS.

## 🚀 Getting Started

This project was built manually. To run it, you will need Node.js installed.

1.  **Install Dependencies**

    ```bash
    npm install
    ```

2.  **Run Development Server**

    ```bash
    npm run dev
    ```

    Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 🛠️ Deployment

This project is ready to be deployed on [Vercel](https://vercel.com).

1.  Push this repository to GitHub.
2.  Import the project in Vercel.
3.  Vercel will automatically detect Next.js and deploy.

## 📁 Project Structure

-   `src/app`: App Router pages and layouts.
-   `src/components`: Reusable UI components (Header, Hero, ProductGrid, etc.).
-   `src/lib`: Utilities, product data, and state management (Zustand).
-   `public`: Static assets.

## 🎨 Features

-   **Responsive Design**: Works on mobile, tablet, and desktop.
-   **State Management**: Cart functionality using Zustand (persisted locally).
-   **Styling**: Tailwind CSS with custom neon/dark theme.
-   **Components**: Modular architecture for easy updates.

## 📝 Customization

-   **Products**: Edit `src/lib/products.ts` to update the catalog.
-   **Theme**: Edit `tailwind.config.ts` to change colors/fonts.

