This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.


## Payments Project
- This is a Next.js application designed to manage and display pending payments. It   
    includes a frontend interface for viewing a table of payments with filtering capabilities and a backend API route to serve the data. The project also features a comprehensive testing setup to ensure both the API and the React components function as expected.

- Features
    Payment Data Display: A frontend page that displays a table of pending payments.
    API Route: A server-side API endpoint (/api/payments) that serves payment data.
    Data Filtering: The API supports filtering payments by recipient and scheduled date.
    Testing: Includes unit and integration tests for both the API routes and the React components, using Jest, React Testing Library, and MSW (Mock Service Worker).


- Installation
    - Clone the repository:
        ```bash
            git clone [your-repository-url]
            cd payments
        ```
    - Install the dependencies:
        ```bash
            yarn
        ```
    -  Run the app
         ```bash
            yarn dev
        ```
    -  To run all tests in the project:
        ```bash
            yarn test (change env to jsdom for page and node for api routes)
        ```
    

- Project Structure
    - src/app/api/payments/route.ts: The API route handler for payments.
    - src/app/page.tsx: The main React component that displays the payments table.
    - data/payments.json: A simple JSON file serving as the data source.
    - src/__tests__/api/payments.test.ts: Unit tests for the payments API route.
    - src/__tests__/page.test.tsx: Component tests for the PaymentsPage using Mock Service Worker.
    - jest.config.js: Jest configuration file for both Node.js (for API) and JSDOM (for UI) environments.
    - stub for deployement lib/PaymentsServiceStack.ts