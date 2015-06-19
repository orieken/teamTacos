test:
	@NODE_ENV=test ./node_modules/.bin/mocha test --reporter spec
karma:
	@NODE_ENV=test ./node_modules/karma/bin/karma start --single-run --browsers PhantomJS


.PHONY: test karma