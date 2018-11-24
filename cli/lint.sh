#!/usr/bin/env sh

mv ${UTILITIES_DIRECTORY}tslint.json ${UTILITIES_DIRECTORY}tslint-self.json

cp ${UTILITIES_DIRECTORY}lint/tslint-main.json .
mv tslint-main.json tslint.json
tslint '**/*.ts{,x}' -e **/node_modules/** --fix -p tsconfig.json
mv tslint.json tslint-main.json

cp ${UTILITIES_DIRECTORY}lint/tslint-test.json .
mv tslint-test.json tslint.json
tslint 'test/**/*.ts{,x}' --fix -p test/tsconfig.json
rm tslint.json
rm tslint-main.json

mv ${UTILITIES_DIRECTORY}tslint-self.json ${UTILITIES_DIRECTORY}tslint.json
