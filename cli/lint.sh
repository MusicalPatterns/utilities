#!/usr/bin/env sh

set -e

${UTILITIES_DIRECTORY}node_modules/.bin/tslint '**/*.ts{,x}' -e **/node_modules/** --fix -p tsconfig.json -c ${UTILITIES_DIRECTORY}tslint.json

${UTILITIES_DIRECTORY}/node_modules/.bin/tslint 'test/**/*.ts{,x}' --fix -p test/tsconfig.json -c ${UTILITIES_DIRECTORY}tslint.json
