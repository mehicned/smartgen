# Next.js with Radix UI

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app), enhanced with [Radix UI](https://www.radix-ui.com/) components and [Tailwind CSS](https://tailwindcss.com/).

## Features

- **Next.js 15** - The React framework for production
- **Radix UI** - Unstyled, accessible components for building high-quality design systems
- **Tailwind CSS** - A utility-first CSS framework
- **TypeScript** - Static type checking for JavaScript
- **Shadcn UI** - Component patterns based on Radix UI and Tailwind CSS

## Getting Started

First, install the dependencies:

```bash
npm install
```

Then, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

- `/app` - Next.js App Router pages and layouts
- `/components` - React components
  - `/ui` - Reusable UI components built with Radix UI
- `/lib` - Utility functions and shared code
- `/public` - Static assets

## Radix UI Components

This project includes several Radix UI components that have been styled with Tailwind CSS:

- **Button** - Various button styles for different contexts
- **Dialog** - Modal dialogs for important interactions
- **Dropdown Menu** - Menus for displaying actions or options

## Customization

### Styling

The project uses Tailwind CSS for styling. You can customize the theme in `tailwind.config.ts` and global styles in `app/globals.css`.

### Adding New Components

To add more Radix UI components:

1. Install the required Radix UI primitive:
   ```bash
   npm install @radix-ui/react-[component-name]
   ```

2. Create a new component in the `components/ui` directory
3. Import and use the component in your application

## Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [Radix UI Documentation](https://www.radix-ui.com/docs/primitives/overview/introduction)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [TypeScript Documentation](https://www.typescriptlang.org/docs/)

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
#   n e d j s  
 #   s m a r t g e n  
 