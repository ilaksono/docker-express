# Deployed using gcloud build submit on gcr.io

## Deploy Steps
1. git clone https://github.com/ilaksono/docker-express docker-node-test && cd docker-node-test
2. chmod +x Dockerfile 
3. gcloud builds submit --tag gcr.io/docker-node-test-299703/hello
4. gcloud run deploy --image gcr.io/docker-node-test-299703/hello
  