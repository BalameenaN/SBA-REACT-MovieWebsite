# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

# SBA-REACT-MovieWebsite
- Created website that lists top 250 movies and tvshows.
- Website details are rendered by fetching its value from the **IMDB** API
- Used React components to implement various features of the website.
- used **React router** concept, to create links to different pages.
- Designed three different pages such as **Film, Tvshow, watchlist**.
- Used different CSS property to make the website attractive and user-friendly.
- Used **local storage** to store the watchlist locally, so as to render those items whenever the page loads.
- Createe state variable using **useState, useReducer** to maintain the values between different pages.
- **prop drilling** is avoided in some case, by adding **useContext** hook.
- Designed dynamic website using **React** hooks.
- Website is deployed using **Netlify** and the deployed link is: