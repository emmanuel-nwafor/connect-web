# Connect Web Application

## Overview
Connect is a modern, responsive web application built with Next.js and React, designed to showcase real estate properties and client testimonials. It features a sleek user interface, interactive elements, and a smooth user experience for browsing available homes and understanding client satisfaction. This application interacts with an external backend API to fetch data.

## Features
*   ✨ **Modern, Responsive UI**: A visually appealing and fully responsive design that adapts to various screen sizes.
*   🏡 **Dynamic Property Listings**: Browse through a curated selection of featured properties with interactive hover effects.
*   🌟 **Engaging Testimonials Section**: Animated testimonials from satisfied clients, enhancing trust and credibility.
*   🤝 **Trusted by Section**: Highlights key statistics and benefits, reinforcing reliability.
*   💡 **Interactive Tooltips**: Animated tooltips on team members' avatars for an enhanced user experience.
*   🔗 **Seamless Navigation**: Intuitive header and footer components for easy site navigation.
*   🚀 **Performance Optimized**: Built with Next.js for fast loading times and efficient rendering.

## Getting Started

Follow these steps to set up and run the Connect web application locally on your machine.

### Installation

1.  **Clone the Repository**:
    ```bash
    git clone https://github.com/emmanuel-nwafor/connect-web.git
    ```

2.  **Navigate to the Project Directory**:
    ```bash
    cd connect-web
    ```

3.  **Install Dependencies**:
    Install the necessary packages using npm or Yarn.
    ```bash
    npm install
    # or
    yarn install
    ```

### Configuration

The application is designed to interact with a backend API. The URL for this API is currently hardcoded in `app/utils/fetchWithToken.js`:

```javascript
const BACKEND_URL = "https://connect-backend-rho.vercel.app/api";
```

For production deployments or if you need to connect to a different backend instance, it is recommended to manage this URL via environment variables. You can achieve this by creating a `.env.local` file in the root of the project and setting:

```
NEXT_PUBLIC_BACKEND_URL=your_backend_api_url_here
```
Then, update `app/utils/fetchWithToken.js` to use this environment variable:
```javascript
const BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URL || "https://connect-backend-rho.vercel.app/api";
```

### Running the Development Server

Start the development server:
```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the application. The page will auto-update as you edit the files.

## Usage

Once the application is running, you can explore its various sections:

*   **Home Page**: The landing page (`/`) provides an overview with a hero section, key statistics about trusted buyers, featured properties, and client testimonials.
*   **Navigation**: Use the header links to navigate between different sections (Home, Properties, About, Blog, Contact). These are currently placeholders and would link to dedicated pages in a full implementation.
*   **Property Showcase**: Scroll down to the "Featured Properties" section to see a grid of properties with interactive hover effects.
*   **Testimonials**: Experience the animated client testimonials in the dedicated section, providing social proof and user feedback.

## Technologies Used

| Technology | Description |
| :--------- | :--------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Next.js** | A React framework for building fast web applications, offering server-side rendering and static site generation. |
| **React** | A JavaScript library for building user interfaces, powering the interactive components of the application. |
| **Tailwind CSS** | A utility-first CSS framework for rapidly building custom designs without leaving your HTML. |
| **Motion (Framer Motion)** | A production-ready motion library for React, enabling fluid animations and interactive experiences. |
| **Lucide React** | A collection of beautiful and customizable open-source icons for React applications. |
| **@tabler/icons-react** | Another set of highly customizable SVG icons designed to be consistent and legible. |
| **CLSX** | A tiny utility for constructing `className` strings conditionally, helping with dynamic styling. |
| **tailwind-merge** | A utility to intelligently merge Tailwind CSS classes, preventing conflicts and ensuring correct styling. |

## Author Info

*   **LinkedIn**: [Your LinkedIn Profile](https://linkedin.com/in/yourusername)
*   **Portfolio**: [Your Portfolio Website](https://yourportfolio.com)
*   **Twitter**: [@YourTwitterHandle](https://twitter.com/yourtwitterhandle)

## Badges

[![Next.js](https://img.shields.io/badge/Next.js-Black?style=for-the-badge&logo=next.js&logoColor=white)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://react.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![NPM Version](https://img.shields.io/badge/npm-CB3837?style=for-the-badge&logo=npm&logoColor=white)](https://www.npmjs.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Readme was generated by Dokugen](https://img.shields.io/badge/Readme%20was%20generated%20by-Dokugen-brightgreen)](https://www.npmjs.com/package/dokugen)