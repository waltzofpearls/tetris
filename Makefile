install:
	npm install

build:
	docker build -t waltzofpearls/tetris .

run:
	npm run build && npm run production

run-container:
	docker run -p 3001:3000 -d waltzofpearls/tetris

test:
	curl localhost:3001

clean:
	rm -rf node_modules


.PHONY: install build run test clean