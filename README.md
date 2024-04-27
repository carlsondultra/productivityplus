## ProductivityPlus
ProductivityPlus is a list-making application that allows team members to collaborate and manage projects both efficiently and effectively.

Visit the application at: https://productivityplus.vercel.app/

## Features
- Authentication (via Clerk)
- Organizations / Workspaces
- Unsplash API for random cover images
- Activity logs 
- Board / List / Card creation
- Renaming, deleting, drag & drop reorder and copy for Lists / Cards
- Board limit for each organization
- Stripe subscription for each organization in order to unlock unlimited boards
- Landing page
- MySQL DB (via Aiven)
- Prisma ORM
- shadcnUI & TailwindCSS

## Getting Started

Clone the repository:

```shell
git clone https://github.com/carlsondultra/productivityplus.git
```

Install packages:

```shell
npm i
```

Setup .env file:


```js
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=
NEXT_PUBLIC_CLERK_SIGN_IN_URL=
NEXT_PUBLIC_CLERK_SIGN_UP_URL=
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=

DATABASE_URL=

NEXT_PUBLIC_UNSPLASH_ACCESS_KEY=

STRIPE_API_KEY=

NEXT_PUBLIC_APP_URL=

STRIPE_WEBHOOK_SECRET=
```

Setup Prisma (MySQL Database used): 

```shell
npx prisma generate
npx prisma db push

```

Run the application:

```shell
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.