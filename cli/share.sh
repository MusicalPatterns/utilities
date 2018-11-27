#!/usr/bin/env sh

FILE="$1"

COUNT_OF_FILES_INSIDE_DIRECTORY=$(ls -1q ${UTILITIES_DIRECTORY}${FILE}* | wc -l)

if [[ ${COUNT_OF_FILES_INSIDE_DIRECTORY} == 1 ]]; then
	cp ${UTILITIES_DIRECTORY}${FILE} ./${FILE}.tmp
else
	cp -r ${UTILITIES_DIRECTORY}${FILE} ./${FILE}.tmp
fi

mv ${FILE} ${FILE}.user > /dev/null 2>&1 || true
mv ${FILE}.tmp ${FILE}
