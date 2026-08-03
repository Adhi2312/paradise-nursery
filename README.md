# e-plantShopping (Paradise Nursery)

Paradise Nursery is a dynamic, single-page e-commerce web application for an
online plant shop. It lets customers browse houseplants grouped by category,
view plant details (thumbnail, name, price), add plants to a shopping cart,
and manage cart items — adjusting quantities, removing items, and viewing a
running total — all without a page reload.

## Project Name

**Paradise Nursery** — "Where Green Meets Serenity"

## Features

- **Landing page** with the Paradise Nursery brand, a background image, and a
  "Get Started" button that reveals the shop.
- **About Us** section describing the company and its mission.
- **Product listing page** with 18 plants across 3 categories (Air Purifying
  Plants, Aromatic Plants, Succulents), each with a thumbnail, name, price,
  and an "Add to Cart" button that disables once added.
- **Persistent navbar** on the shop and cart views, linking to Home, Plants,
  and Cart, with a live item-count badge on the cart icon.
- **Shopping cart page** showing each item's thumbnail, name, unit cost,
  and subtotal, with quantity +/- controls, a delete button, a running total
  amount, a "Continue Shopping" button, and a "Checkout" button that shows a
  "Coming Soon" message.

## Tech Stack

- **React 19** (Vite)
- **Redux Toolkit** + **React Redux** for cart state management
- Plain CSS (no UI framework)

## Project Structure

```
src/
  App.jsx                  Landing page + view toggling
  App.css                  Landing page styles (background image, hero)
  index.css                Global reset
  main.jsx                 App entry point (wraps App in the Redux Provider)
  components/
    AboutUs.jsx / .css     Company "About Us" section
    ProductList.jsx / .css Product listing page (navbar + categories)
    CartItem.jsx / .css    Shopping cart page
  redux/
    CartSlice.jsx          Redux Toolkit slice (addItem, removeItem, updateQuantity)
    store.js               Redux store configuration
  data/
    plants.js              Plant catalog data (18 plants, 3 categories)
```

## Getting Started

```bash
npm install
npm run dev       # start the dev server
npm run build     # production build
npm run preview   # preview the production build
```

## Author

Adhilingavignesh K
