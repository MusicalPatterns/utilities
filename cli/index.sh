#!/usr/bin/env sh

OPT="$2"
if [[ ${OPT} == "self" ]] ; then
    export UTILITIES_DIRECTORY="./"
else
    export UTILITIES_DIRECTORY="./node_modules/@musical-patterns/utilities/"
fi

export PATH=${PATH}:./node_modules/.bin/:${UTILITIES_DIRECTORY}node_modules/.bin/

BUILD_CMD="$3"

CMD="$1"
sh ${UTILITIES_DIRECTORY}cli/${CMD}.sh "$BUILD_CMD"
