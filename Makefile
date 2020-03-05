install:
	npm install

publish:
	npm publish --dry-run

build:
	rm -rf dist
	npm run build

test:
	npm test

start:
	npx babel-node src/bin/gendiff.js before.json after.json

lint:
	npx eslint .

install-deps:
	npm ci

test-coverage:
	npm test -- --coverage