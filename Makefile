start:
	npx babel-node src/bin/gendiff.js before.json after.json

publish:
	npm publish --dry-run

lint:
	npx eslint .