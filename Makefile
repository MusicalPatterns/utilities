.PHONY: lint
.PHONY: test

publish:
	musical-patterns publish

build:
	musical-patterns build tsc

lint:
	musical-patterns lint

test:
	musical-patterns test
