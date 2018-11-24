.PHONY: lint
.PHONY: test

deploy:
	./bin/deploy.sh

build:
	./bin/build.sh

lint:
	./cli/index.sh lint self

test:
	./bin/test.sh
