# DockerPracticeApp
Basic Node.Js app created to learn Docker 

Use following command to create image:   docker build -t node-test-app:latest .

App is exposing 3000 port, so while creating container, one has to map 3000 port. i.e : docker run -p 3000:3000 -d --name node-app node-test-app:latest

The app will be updated to access Volumes and Bind Mounts

