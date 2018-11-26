#!/usr/bin/env sh

set -e

CMD="$1"

rm -rf dist/

cp ${UTILITIES_DIRECTORY}tsconfig.json ./tsconfig-tmp.json
mv tsconfig.json tsconfig-user.json > /dev/null 2>&1 || true
mv tsconfig-tmp.json tsconfig.json

cp ${UTILITIES_DIRECTORY}tsconfig-common.json ./tsconfig-common-tmp.json
mv tsconfig-common.json tsconfig-common-user.json > /dev/null 2>&1 || true
mv tsconfig-common-tmp.json tsconfig-common.json

eval "${CMD}"

rm tsconfig.json
mv tsconfig-user.json tsconfig.json > /dev/null 2>&1 || true

rm tsconfig-common.json
mv tsconfig-common-user.json tsconfig-common.json > /dev/null 2>&1 || true
