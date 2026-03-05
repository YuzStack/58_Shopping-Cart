# 🛒 TrendSetter | Modern E-commerce Store

![Shopping Cart](/1_Shop.png)

**TrendSetter** is a fully functional, high-performance shopping cart application built as part of **The Odin Project** curriculum. It demonstrates a sophisticated implementation of client-side routing, real-time state synchronization, and external API integration.

**[Live Preview](https://yuzstack-shopping-cart.netlify.app/)**

## 🏗️ The Tech Stack

- **React (Vite)** – For a lightning-fast development experience.
- **Tailwind CSS** – For a responsive, "utility-first" design.
- **React Router** 7 – Implementing the `<NavLink />` and `<Outlet />`, pattern for seamless navigation.
- **FakeStore API** – Powering the dynamic product catalog.

## 🌟 Key Features

1. Dynamic Product Catalog
   Fetched directly from the **FakeStore API**, the shop displays real-time data across various categories. Each product card is built with an interactive interface allowing users to:

- Manually input quantities.
- Fine-tune orders using increment/decrement buttons.
- Add items to a persistent cart.

2. Intelligent Cart Synchronization
   The application features a "Single Source of Truth" for the cart state.

- **Real-time Badge:** The navigation bar updates the item count instantly as you shop.
- **Smart Updates:** The logic automatically detects if an item is already in the cart, updating the quantity rather than creating duplicates.

3. Professional Routing & Layout
   Utilizing a **"Layout Route"** pattern, the navigation bar remains persistent while users move between the Home, Shop, and Cart pages. This ensures zero "layout shift" and a smoother user experience.

## 🛠️ Technical Challenges Overcome

**Prop Drilling vs. Outlet Context**

During development, a significant challenge arose: **How to pass global state to children rendered by a router outlet?**

- **The Solution:** I implemented the `useOutletContext` hook. By lifting the cart state to the `App` component and passing it through the `<Outlet />`, I ensured that the `Shop` and `Cart` pages remained perfectly synced without the complexity of a full Context API setup.

## Array Logic Optimization

To maintain a bug-free cart, I utilized advanced JavaScript array methods:

- `.map()` for safe, immutable state updates when changing quantities.
- `.filter()` for efficient item removal.

## Deployment & Pathing

Encountered and resolved production issues regarding relative pathing for background images and Netlify's 404 handling of client-side routes via a `\_redirects` configuration.

## 🚀 Getting Started

To run this project locally:

1. Clone the repository: `git clone https://github.com/YuzStack/57_Memory-Game.git`
2. Install dependencies: `npm install`
3. Start the development server: `npm run dev`

## 📜 Acknowledgments

- Inspired by **The Odin Project** "Shopping Cart" project.
- Data provided by [FakeStore API](https://fakestoreapi.com/).
- Built with guidance from Jonas Schmedtmann’s React Course.
