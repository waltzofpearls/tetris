install:
	npm install

build:
	docker build -t waltzofpearls/tetris .

run:
	node index.js

run-container:
	docker run -p 3000:3001 -d waltzofpearls/tetris

test:
	curl localhost

clean:
	rm -rf node_modules


.PHONY: install build run test clean