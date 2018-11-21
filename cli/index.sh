#!/usr/bin/env sh

set -e

CMD="$1"
export UTILITIES_DIRECTORY="./node_modules/@musical-patterns/utilities/"
export PATH=${PATH}:./node_modules/.bin/:${UTILITIES_DIRECTORY}/node_modules/.bin/

if [[ ${CMD} == "lint" ]] ; then
    sh ${UTILITIES_DIRECTORY}/cli/lint.sh
fi
