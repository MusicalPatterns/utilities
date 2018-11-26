.PHONY: lint
.PHONY: test

publish:
	./cli/index.sh publish self

build:
	./bin/build.sh

lint:
	./cli/index.sh lint self

test:
	./bin/test.sh
