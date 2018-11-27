#!/usr/bin/env sh

FILE="$1"

COUNT_OF_FILES_INSIDE_DIRECTORY=$(ls -1q ${UTILITIES_DIRECTORY}${FILE}* | wc -l)

if [[ ${COUNT_OF_FILES_INSIDE_DIRECTORY} == 1 ]]; then
	rm ${FILE}
else
	rm -r ${FILE}
fi

mv ${FILE}.user ${FILE} > /dev/null 2>&1 || true
