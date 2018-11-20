#!/usr/bin/env sh

set -e

CMD="$1"
export UTILITIES_DIRECTORY="./node_modules/@musical-patterns/utilities/"

if [[ ${CMD} == "lint" ]] ; then
    sh ${UTILITIES_DIRECTORY}/cli/lint.sh
fi
