#!/usr/bin/env sh

# position config files

cp ${UTILITIES_DIRECTORY}tslint.json ./tslint-tmp.json
mv tslint.json tslint-user.json > /dev/null 2>&1 || true
mv tslint-tmp.json tslint.json

cp ${UTILITIES_DIRECTORY}test/tslint.json ./test/tslint-tmp.json
mv test/tslint.json test/tslint-user.json > /dev/null 2>&1 || true
mv test/tslint-tmp.json test/tslint.json

cp -r ${UTILITIES_DIRECTORY}lint ./lint-tmp
mv lint lint-user > /dev/null 2>&1 || true
mv lint-tmp lint

# lint

tslint '**/*.ts{,x}' -e **/node_modules/** --fix -p tsconfig.json

tslint 'test/**/*.ts{,x}' --fix -p test/tsconfig.json

# cleanup

rm tslint.json
mv tslint-user.json tslint.json > /dev/null 2>&1 || true

rm test/tslint.json
mv test/tslint-user.json test/tslint.json > /dev/null 2>&1 || true

rm -r lint
mv lint-user lint > /dev/null 2>&1 || true
