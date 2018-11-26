.PHONY: lint
.PHONY: test

publish:
	./cli/index.sh publish self

build:
	./node_modules/.bin/tsc

lint:
	./cli/index.sh lint self

test:
	./bin/test.sh
