up:
	sudo docker-compose up --force-recreate -d
	sudo docker-compose ps

down:
	sudo docker-compose down --remove-orphans

start:
	sudo docker-compose restart
	sudo docker-compose ps

stop:
	sudo docker-compose stop

front_install:
	sudo docker run --rm -ti \
		--user 1000:0 \
		-v $(shell pwd)/front/:/app/ \
		-w /app/src/ \
		centos/nodejs-8-centos7:latest npm install
