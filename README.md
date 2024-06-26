# Documentation

This is for documentation use only

## Skill stack

### vitepress

This repo use **vitepress** for generating online docs <https://vitepress.dev/reference/default-theme-config#sidebar>

### auto generate sidebar

Sidebar is generated by using <https://vitepress-sidebar.jooy2.com/getting-started>

## Note

- All documentation files should be under `docs` folder.
- Folders under `docs` will be grouped on the sidebar.
- The heading 1 in `index.md` file under each folder will be title showing on the sidebar <https://vitepress-sidebar.jooy2.com/api#usefoldertitlefromindexfile>
- All `.md` files are the documentation and will be generated to the web

## Writing documentation only

You can always use this repo as simple documentation without running.
After you update note, just commit and push to repo.

## Real time rendering online documentation

If you want to start a local dev server with instant hot updates, please check below

### Installation

```bash
npm install
# or
pnpm install
```

### Running the app

```bash
npm run dev
# or
pnpm dev
```

The dev server should be running at <http://localhost:5173>
