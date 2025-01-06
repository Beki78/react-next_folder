# React/Next folder generator with Js/Ts

## Overview

Welcome to **react-cli-builder**, a CLI tool designed to generate a folder for **React** or **Next.js** projects using both **typescript** and **javascript** with **boilder plate code** and it is fully customizable. 
 

## Features

- **Framework Support**: React Js and Next js.
- **Language Support**: TypeScript and Javascript.
- **Directory Generation**: Automatically create essential directories like `api`, `auth`, `components`, `context`, `hooks`, `libs`, `pages`, `redux`, `redux-saga`, `store`, and `utils`.
- **State Management**:  Generate a folder for context, zustand, redux and redux with redux saga.

## Installation

```bash
npm install react-cli-builder
```

after installing the package to use the CLI run:

```bash
npx create-[options]
```

## Options

- **[api]**  
  Create a new API folder.

- **[auth]**  
  Create a new auth folder.

- **[component]**  
  Create a new component folder.

- **[context]**  
  Create a new context folder.

- **[hook]**  
  Create a new hooks folder.

- **[lib]**  
  Create a new library folder.

- **[pages]**  
  Create a new pages folder.

- **[redux]**  
  Create a new redux folder.

- **[redux-saga]**  
  Create a new redux-saga folder.

- **[store]**  
  Create a new store folder.

- **[utils]**  
  Create a new utils folder.

- **[basic]**  
  Create a new basic folder structure (Pages & Components).

## Example

```bash
npx create-api
npx create-auth
```

to get help run: 
```bash
npx react-cli-builder --help
```

## Multi-Argument Folder Creation

With the new update, you can now create multiple folders in one command:
```bash
npx create-folders <folder1> <folder2> ...
```
Example:

```bash
npx create-folders auth lib pages
```
This command creates the auth, lib, and pages folders along with their respective files.
## You can also create a single folder 
```bash
npx create-folders <folder1>
```
Example:

```bash
npx create-folders auth 
```
this will create a folder called auth
