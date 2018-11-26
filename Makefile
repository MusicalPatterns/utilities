.PHONY: lint
.PHONY: test

publish:
	./cli/index.sh publish self

build:
	sh ./node_modules/.bin/tsc

lint:
	./cli/index.sh lint self

test:
	./cli/index.sh test self
