#!/usr/bin/env sh

set -e

OPT="$2"
if [[ ${OPT} == "self" ]] ; then
    export UTILITIES_DIRECTORY="./"
else
    export UTILITIES_DIRECTORY="./node_modules/@musical-patterns/utilities/"
fi

export PATH=${PATH}:./node_modules/.bin/:${UTILITIES_DIRECTORY}node_modules/.bin/

CMD="$1"
sh ${UTILITIES_DIRECTORY}cli/${CMD}.sh
