# Blog App with Next.js

## Objective

This application is a responsive blog built with **Next.js** and **Tailwind CSS**. It fetches and displays posts from a public API (JSONPlaceholder API), implements dynamic routing for post pages, and offers interactivity via a hashtag search feature.

## Installation and Setup Instructions

1.  Clone the GitHub repository:

    ```bash
    git clone <repository_url>
    ```

2.  Install dependencies:

    ```bash
    npm install
    # or
    yarn install
    ```

3.  Start the development server:

    ```bash
    npm run dev
    # or
    yarn dev
    ```

    This will start the application in development mode.

## Approach

### General Approach

-This app is meant to be user friendly, with just the necessary amount of interactions needed to move around the pages.
-In the desktop version everything interactive is on screen, while in the mobile version the search elements are hidden inside a lateral menu. The design is responsive to show all the elements correctly on every device.

### Next.js

**Next.js** was used for several key features:

- **File-system routing**: Routes are defined by the folder structure inside the `pages/` directory.
- **Static Site Generation (SSG)**: Utilizing `getStaticProps` and `getStaticPaths` to pre-render blog post pages at build time, improving performance.

### Tailwind CSS

**Tailwind CSS** has been integrated to provide responsive and modern styling. The Tailwind configuration is in `tailwind.config.js`, and styles are applied via utility classes directly in the components and repetitive color elements are in the @theme configuration to avoid repeating arbitraty values.

## Advanced Features Implemented

- **Dynamic Routing**: Implemented for post pages via the `pages/posts/[id].tsx` folder. Uses `getStaticPaths` to define possible paths and `getStaticProps` to retrieve data for each post.
- **Hashtag Search**: Allows filtering of posts based on hashtags present in the title. The `generateHashtags` function extracts hashtags from post titles, and the `filterPosts` function filters posts based on the selected hashtag.
- **Optimized Rendering**: `getStaticProps` and `getStaticPaths` are used to statically generate pages, improving performance and SEO.

## Project Structure

```
blog_app/
├── components/     # Reusable React components
├── lib/          # Utility functions
├── pages/        # Application routes
│   ├── index.tsx   # Homepage
│   ├── about.tsx   # "About" page
│   └── posts/
│       └── [id].tsx  # Post details page (dynamic routing)
├── public/       # Static assets (images, etc.)
├── styles/       # Global CSS and CSS modules
└── types/        # TypeScript definitions
```

- `components/`: Contains all reusable React components.
- `lib/`: Includes utility functions such as `limitText` (to limit text length), `capitalizeTitle` (to capitalize titles), `generateHashtags` (to generate hashtags from titles), and `filterPosts` (to filter posts based on hashtags).
- `pages/`: Defines the application routes.
  - `pages/index.tsx`: Homepage displaying the list of posts.
  - `pages/about.tsx`: "About" page.
  - `pages/posts/[id].tsx`: Post details page with dynamic routing.
  - `pages/_app.tsx`: Custom App component for layout management.
- `public/`: Contains static assets such as images.
- `styles/`: Includes global CSS files and CSS modules.
- `types/`: Defines the TypeScript interfaces used in the project, such as `Post`, `HashGridProps`, and `HashProps`.

## Deploy

The application is deployed on **Vercel** at the link:

## Code Quality

- Clean, modular, and readable code with reusable components.
- Functions are kept short and focused on a single task, in line with the Single Responsibility Principle (SRP).
- DRY ("Don't Repeat Yourself") principle applied to avoid code duplication.
- Code refactoring performed regularly to improve flexibility and maintainability.

## Author Information

- Name: _Alberto Biolchi_
- Email: *biolchi.alberto23@gmail.com*
- GitHub: *https://github.com/Alberto23B*
