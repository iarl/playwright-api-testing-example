start: 
	docker-compose build && docker-compose up -d

restart:
	make start

stop:
	docker-compose kill

purge:
	docker-compose kill && docker-compose rm