.PHONY: install build run setup start test clean

install:
	npm install

build:
	docker build -t waltzofpearls/tetris .

run:
	docker run -p 49001:3000 -d waltzofpearls/tetris

setup:
	nvm use 0.11

start:
	npm run build && npm run development

test:
	npm test

clean:
	rm -rf node_modules