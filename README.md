# Deployed using gcloud build submit on gcr.io

## Deploy Steps
1. git clone https://github.com/ilaksono/docker-express docker-node-test && cd docker-node-test
2. chmod +x Dockerfile 
3. gcloud builds submit --tag gcr.io/docker-node-test-299703/hello
4. gcloud run deploy --image gcr.io/docker-node-test-299703/hello

in KBE -> create cluster -> expose 
set port = 3001
set target port = 3001 
resource: https://cloud.google.com/kubernetes-engine/docs/tutorials/hello-app
deploy url: http://34.66.247.115:3001/

## Run Local Docker
 - docker run -it -p 9000:3001 node-docker-test
  