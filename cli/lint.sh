#!/usr/bin/env sh

set -e

tslint '**/*.ts{,x}' -e **/node_modules/** --fix -p tsconfig.json -c ${UTILITIES_DIRECTORY}tslint.json

tslint 'test/**/*.ts{,x}' --fix -p test/tsconfig.json -c ${UTILITIES_DIRECTORY}/test/tslint.json
