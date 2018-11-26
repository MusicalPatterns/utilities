#!/usr/bin/env sh

set -e

export JASMINE_CONFIG_PATH=${UTILITIES_DIRECTORY}test/support/jasmine.json

cp ${UTILITIES_DIRECTORY}test/tsconfig.json ./test/tsconfig-tmp.json
mv test/tsconfig.json test/tsconfig-user.json > /dev/null 2>&1 || true
mv test/tsconfig-tmp.json test/tsconfig.json

cp ${UTILITIES_DIRECTORY}tsconfig-common.json ./tsconfig-common-tmp.json
mv tsconfig-common.json tsconfig-common-user.json > /dev/null 2>&1 || true
mv tsconfig-common-tmp.json tsconfig-common.json

./node_modules/.bin/tsc -p ./test/tsconfig.json
./node_modules/.bin/ts-node -P ${UTILITIES_DIRECTORY}/test/tsconfig.json ${UTILITIES_DIRECTORY}/node_modules/jasmine/bin/jasmine.js

rm test/tsconfig.json
mv test/tsconfig-user.json test/tsconfig.json > /dev/null 2>&1 || true

rm tsconfig-common.json
mv tsconfig-common-user.json tsconfig-common.json > /dev/null 2>&1 || true
