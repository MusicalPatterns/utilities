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

cp ${UTILITIES_DIRECTORY}tsconfig.json ./tsconfig-tmp.json
mv tsconfig.json tsconfig-user.json > /dev/null 2>&1 || true
mv tsconfig-tmp.json tsconfig.json

cp ${UTILITIES_DIRECTORY}tsconfig-common.json ./tsconfig-common-tmp.json
mv tsconfig-common.json tsconfig-common-user.json > /dev/null 2>&1 || true
mv tsconfig-common-tmp.json tsconfig-common.json

cp ${UTILITIES_DIRECTORY}test/tsconfig.json ./test/tsconfig-tmp.json
mv test/tsconfig.json test/tsconfig-user.json > /dev/null 2>&1 || true
mv test/tsconfig-tmp.json test/tsconfig.json

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

rm tsconfig.json
mv tsconfig-user.json tsconfig.json > /dev/null 2>&1 || true

rm tsconfig-common.json
mv tsconfig-common-user.json tsconfig-common.json > /dev/null 2>&1 || true

rm test/tsconfig.json
mv test/tsconfig-user.json test/tsconfig.json > /dev/null 2>&1 || true
