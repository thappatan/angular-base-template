PROJECT_NAME = angular-base-template

.PHONY: help install run pack server

help: ## Display this help screen
	@grep -h -E '^[0-9a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | awk 'BEGIN {FS = ":.*?## "}; {printf "\033[36m%-30s\033[0m %s\n", $$1, $$2}'

install: ## Install dependencies
	npm install

run: ## Run application
	npm run start

pack: ## Build and pack application
	npm run build

server: ## Build and run application with lite server
	npm run build:w&
	sleep 5; npm run local

docker-pack: ## Build and pack application with docker image
	docker build -t $(PROJECT_NAME) .

docker-run: ## Run application with docker container
	docker run --name $(PROJECT_NAME)-container -d -p 8888:80 $(PROJECT_NAME)

