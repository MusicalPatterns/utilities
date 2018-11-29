.PHONY: lint
.PHONY: test

publish:
	musical-patterns publish

build:
	musical-patterns build "tsc -m commonjs"

lint:
	musical-patterns lint

test:
	musical-patterns test
