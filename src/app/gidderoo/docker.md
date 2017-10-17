Docker spring Cheatsheet
** Dockerfile
https://www.digitalocean.com/community/tutorials/docker-explained-using-dockerfiles-to-automate-building-of-images
http://kimh.github.io/blog/en/docker/gotchas-in-writing-dockerfile-en/

** REFERENCRS
https://docs.docker.com/engine/reference/commandline/run/
https://www.digitalocean.com/community/tutorials/docker-explained-using-dockerfiles-to-automate-building-of-images
https://www.howtoforge.com/tutorial/how-to-create-docker-images-with-dockerfile/

** REMOVE ALL IMAGES
docker rmi $(docker images)

** RUN CONTAINER
docker run -p 8082:8082  -t demo-build3

** BUILD IMAGES
 docker build -t demo-build3 .

 ** LIST ALL CONTAINERS
  docker ps -a

** INSTALL AND RUN MONGODB INSTANCE
https://github.com/docker-library/docs/blob/master/mongo/README.md
https://github.com/dockerfile/mongodb
docker build -t="dockerfile/mongodb"
docker run --name some-mongo -d mongo

* mongo
https://hub.docker.com/r/mvertes/alpine-mongo/
docker run -it --link some-mongo:mongo --rm mongo sh -c 'exec mongo "$MONGO_PORT_27017_TCP_ADDR:$MONGO_PORT_27017_TCP_PORT/test"'

docker run -P -d --name mongodb mongo
  
  -P tells Docker to expose any container-declared port in the ephemeral range
 -d says to run the container as a daemon (e.g. in the background)
 –name mongodb says what name to assign to the container instance (names must be unique across all running container instances. If you don’t supply one, you will get a random semi-friendly name like: modest_poitras)
   mongo at the end indicates which image definition to use


