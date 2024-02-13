[![Built with Starlight](https://astro.badg.es/v2/built-with-starlight/tiny.svg)](https://starlight.astro.build)

# Taiko docs

Welcome to Taiko docs!

## Repo architecture

Here we will list the important folders within this repo.

### src/content

This is where we store all of the content.

### src/content/config.ts

This is where we extend the `docsSchema`.

## Running Locally

To run the Taiko docs website locally, you can use the following commands found in `package.json`:

- To start the development server and view the site at `http://localhost:4321/`, run:
  ```sh
  npm run dev
  ```
  or
  ```sh
  npm start
  ```

- To build the site for production, use:
  ```sh
  npm run build
  ```

- To preview the built site, run:
  ```sh
  npm run preview
  ```

These commands leverage Astro's development, build, and preview capabilities to allow you to work on and test the Taiko docs.

## Contributing

View CONTRIBUTING.md inside of the [Taiko monorepo](https://github.com/taikoxyz/taiko-mono/blob/main/CONTRIBUTING.md).
