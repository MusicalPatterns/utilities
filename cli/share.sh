#!/usr/bin/env sh

FILE="$1"

if [[ -d ${FILE} ]]; then
	cp -r ${UTILITIES_DIRECTORY}${FILE} ./${FILE}.tmp
else
	cp ${UTILITIES_DIRECTORY}${FILE} ./${FILE}.tmp
fi

mv ${FILE} ${FILE}.user > /dev/null 2>&1 || true
mv ${FILE}.tmp ${FILE}
