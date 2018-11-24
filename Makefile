.PHONY: lint
.PHONY: test

publish:
	./bin/publish.sh

build:
	./bin/build.sh

lint:
	./cli/index.sh lint self

test:
	./bin/test.sh
