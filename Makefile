SOURCE_FILES:=$(shell find src/ -type f -name '*.ts')

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
	node_modules/.bin/eslint --quiet 'src/*.ts'

.PHONY: fix
fix:
	node_modules/.bin/eslint --quiet 'src/*.ts' --fix

.PHONY: watch
watch:
	./node_modules/.bin/tsc --watch

dist/build: $(SOURCE_FILES)
	./node_modules/.bin/tsc
	touch dist/build
