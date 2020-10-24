# A statically generated blog example using Next.js, Markdown, and TypeScript

This is an blog site the existing [blog-starter-typeScript](https://github.com/vercel/next.js/tree/master/examples/blog-starter-typescript).

## How to write a article

### Add a markdown

Add a markdown (with yaml-frontmattter) to /_posts and edit frontmatter especially tags.

### Generate OGP images and tag-related jsons

at `/generators`:

#### Setup assets

Some fonts are specified in ogimages.ts, so you need to install specified fonts to /assets/fonts.  
And your name and avatar image is also required in ogimages.ts, so you should describe your name and put avatar.png in /assets.

#### Run commands

```sh
$ npm ci # run this at first
$ npm run gen # generate article og images and tag jsons
$ npm run gen:ogimages # gen og images only
$ npm run gen:tags # gen tag jsons only
```

### Run the server

```sh
$ docker-compose build
$ docker-compose run --rm --service-ports app
% npm ci && npm run dev 
```

## How to deploy

### Build settings at Netlify

Build command: `npm run deploy`
Publish directory: `out`