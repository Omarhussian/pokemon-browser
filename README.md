# Pokémon Browser

A responsive Pokémon browser built with **React + TypeScript + Vite**, featuring two list views (pagination & infinite scroll) and detailed Pokémon pages.  
Uses the [PokéAPI](https://pokeapi.co/) for data, and is structured with scalable architecture for reuse and maintainability.

---

## 🚀 Features

- Browse all Pokémon with two UX variants:  
  - **Pagination View** — classic page-by-page navigation  
  - **Load More View** — infinite scroll or “Load More” button  
- Detailed page for each Pokémon displaying:  
  - Name  
  - Sprite  
  - Height & Weight  
  - Types  
- API layer built with **Axios** and **React Query** for efficient fetching, caching, and error handling  
- Modern styling with **SCSS Modules**, global mixins, and variables  
- Fully responsive across desktop, tablet, and mobile  
- Clean, modular, type-safe architecture with clear separation of concerns  

---

## 🛠️ Tech Stack

- **React** (functional components, hooks)  
- **TypeScript** (strict typing for API responses)  
- **Vite** (lightning-fast build & dev experience)  
- **React Query** (@tanstack/react-query) for state management & caching  
- **Axios** for API requests  
- **SCSS Modules** for scoped, maintainable styling  
- **React Router** for routing between pages  

---

## 🎬 Getting Started

```bash
# 1. Clone the Repository
git clone https://github.com/Omarhussian/pokemon-browser.git
cd pokemon-browser

# 2. Install Dependencies
npm install

# 3. Start the Development Server
npm run dev

# 4. Open in your browser
http://localhost:5173
# Create a production build
npm run build

# Preview the production build locally
npm run preview