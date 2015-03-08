.PHONY: build run stop status install test clean

repo = waltzofpearls/tetris
name = tetris

# Docker related Makefile targets
build:
	docker build -t $(repo) .

run:
	docker run -p 49001:3000 -d --name $(name) $(repo)

stop:
	docker ps -a | grep $(name) > /dev/null \
	&& docker stop $(name) && docker rm $(name) \
	|| echo "\nDocker container [$(name)] does not exist."

status:
	docker ps -a -f name=$(name)

# Node and npm related Makefile targets
purge:
	docker images | grep $(repo) > /dev/null \
	&& docker rmi $(repo) \
	|| echo "\nDocker image [$(repo)] does not exist."

install:
	nvm use 0.11 && npm install

test:
	nvm use 0.11 && npm test

clean:
	rm -rf node_modules