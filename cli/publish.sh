#!/usr/bin/env sh

set -e

rm -rf dist/
make build
npm i
npm publish --access public
