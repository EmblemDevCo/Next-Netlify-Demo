## What you need

- A netlify account (it's free)

* Node (if you want to run this locally)

## Getting Started

### Fork this repo

Click the fork button in the top right corner and fork it under your personal github organization

## Run the app locally (skip if you just want to deploy to netlify)

### First, make sure you have node installed.

I suggest installing node using [nvm](https://github.com/nvm-sh/nvm/blob/master/README.md). After node is intalled run nvm use 12 or higher. Restart your terminal and ensure node -v says you are running node 12 or whichever version you installed.

### Next, Install dependencies

```bash
npm install
# or
yarn
```

### Create a `.env.local` file in the root of the project and add these this

```bash
CONTENTFUL_SPACE=56zta97glphi
CONTENTFUL_ACCESS_TOKEN=xyVRKdnVe8dls1F2Qmn9pteHEFKr9mq2XvzyDaaf2Gw
```

### Now, let's run our code locally

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Setup Netlify

### Signup

Go to [https://netlify.com](https://netlify.com)

Sign up or login using your github account

### First Time in Account

Click through the get started guide

Click New Site from Git

Click Github under the Continuous Deployment Secion

Sign into Github SSO

### Connect Desired Repo

Choose the forked repo
from the list. If you don't see it, search for `next-netlify-demo` and hit enter. This should
make it appear.

Make sure the branch to deploy is set to `main`

Add `next build` in the build comand input

Click Show Advanced, then new variable and add the two environment variables you copied to the `.env.local` file earlier

Then, click to the Deploy Site button

### Add Plugin for NextJS

Click the Plugins tab in the main navigation

Search for `next` in the search box

Find the Next on Netlify plugin and click the install button

INstall it on our site (if you have multiple sites be sure to choose the correct one)

### Redeploy

Go to Sites in the main navigation

Pick our site

Go To Deploys in the main navigation

Click the trigger deploy button

Click deploy site.

Take a look at the build logs, you will notice that the pages are being statically generated and your build time should be fairly short.

Once the deploy is done you can view the site on a live url.

Go back to the site, and click on the provided url.
