# Purpose

This repository is for demonstrating how to do monorepo for an React frontend project.

# Bootstrap

To start using this monorepo do the following

1. `yarn install`
2. `yarn run lerna bootstrap`

Please read `REEADME.md` file in each `packages/*` for further instructions.

# Build

Run `yarn run build` to build production bundle for each packages.

# Folder Structure

## `packages/compnents`

This is the shared React components that will be used across many other packages.

## `packages/app`

This is the product site which will be shown to our user. In this package it will use common components from `package/components`.
