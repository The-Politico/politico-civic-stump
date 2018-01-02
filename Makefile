test:
	pytest -v

ship:
	python setup.py sdist bdist_wheel
	twine upload dist/* --skip-existing

dev:
	gulp --cwd stump/staticapp/

database:
	dropdb stump --if-exists
	createdb stump
