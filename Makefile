.PHONY: lint
.PHONY: test

publish:
	./cli/index.sh publish self

build:
	./cli/index.sh build self "tsc -m commonjs"

lint:
	./cli/index.sh lint self

test:
	./cli/index.sh test self
