#!/usr/bin/env sh

FILE="$1"

if [[ -d ${FILE} ]]; then
	rm -r ${FILE}
else
	rm ${FILE}
fi

mv ${FILE}.user ${FILE} > /dev/null 2>&1 || true
