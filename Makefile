.PHONY: build
build: dist/build

.PHONY: clean
clean:
	-rm -r browser/
	-rm -r dist/

.PHONY: test
test: lint

.PHONY: lint
lint:
	node_modules/.bin/tslint -c tslint.json --project tsconfig.json 'src/**/*.ts' 'test/**/*.ts'

.PHONY: fix
fix:
	node_modules/.bin/tslint -c tslint.json --project tsconfig.json 'src/**/*.ts' 'test/**/*.ts' --fix

.PHONY: watch
watch:
	./node_modules/.bin/tsc --watch

dist/build:
	./node_modules/.bin/tsc
	touch dist/build
