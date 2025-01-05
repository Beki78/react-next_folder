#!/usr/bin/env node

const args = process.argv.slice(2);

if (args.includes("--help")) {
  console.log(`
Usage: npx create-[options]

Options:
  [api]        - Create a new API folder
  [auth]       - Create a new auth folder
  [component]  - Create a new component folder
  [context]    - Create a new context folder
  [hooks]      - Create a new hooks folder
  [lib]        - Create a new library folder
  [pages]      - Create a new pages folder
  [redux]      - Create a new redux folder
  [redux-saga] - Create a new redux-saga folder
  [store]      - Create a new store folder
  [utils]      - Create a new utils folder

  [basic]        - Create a new basic folder structure(Pages & Components)
Example:
  npx create-[component]
  `);
} else if (args.includes("--version")) {
  console.log("react-cli-builder version 2.0.0");
} else {
  console.log("No flags provided. Run '--help' for usage.");
}
