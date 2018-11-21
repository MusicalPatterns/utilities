.PHONY: lint

deploy:
	./bin/deploy.sh

build:
	./bin/build.sh

lint:
	./cli/index.sh lint self
