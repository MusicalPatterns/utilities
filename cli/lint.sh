#!/usr/bin/env sh

cp ${UTILITIES_DIRECTORY}tslint.json ./tslint-self.json

mv ./tslint.json ./tslint-user.json

cp ${UTILITIES_DIRECTORY}lint/tslint-main.json .
mv tslint-main.json tslint.json
tslint '**/*.ts{,x}' -e **/node_modules/** --fix -p tsconfig.json
mv tslint.json tslint-main.json

cp ${UTILITIES_DIRECTORY}lint/tslint-test.json .
mv tslint-test.json tslint.json
tslint 'test/**/*.ts{,x}' --fix -p test/tsconfig.json

rm tslint.json
rm tslint-main.json
rm tslint-self.json

mv ./tslint-user.json ./tslint.json
