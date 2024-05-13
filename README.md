# Swagger REST API
http://localhost:8080/swagger-ui/index.html

# Update and deploy
* `gradle build`
* Push main branch to remote Git repo
* A few minutes later, changes will be deployed to https://igikoni.onrender.com hosted on https://dashboard.render.com/

# Image upload/retrieve tutorial
https://www.javainuse.com/fullstack/imageupload

# Deploy Angular with Spring Boot in the same executable JAR
https://marco.dev/angular-with-java

# Docker
docker build -t nikuzejl/igikoni-server:latest .
docker run -p 10000:10000 nikuzejl/igikoni-server:latest

# Running the UI and server

`./gradlew clean build`

`netlify deploy --prod`

`java -jar C:\Users\Masabo\Desktop\igikoni\build\libs\igikoni-0.0.1-SNAPSHOT.jar --server.port=9000 --jwt.secret=eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiYWRtaW4iOnRydWUsImlhdCI6MTUxNjIzOTAyMn0NHVaYe26MbtOYhSKkoKYdFVomg4i8ZJd8RU8VNbftc4TSMb4bXP3l3YlNWACwyXPGffz5aXHc6lty1Y2t4SWRqGteragsVdZufDn5BlnJl9pdRkdVFUsra2rWKEofkZeIC4yWytE58sMIihvo9H1ScmmVwBcQP6XETqYd0aSHp1gOa9RdUPDvoXQ5oqygTqVtxaDr6wUFKrKItgBMzWIdNZ6y7O9E0DhEPTbE9rfBo6KTFsHAZnMg4k68CDp2woYIaXbmYTWcvbzIuHO737GT79XdIwkm95QJ7hYC9RiwrV7mesbY4PAahERJawntho0my942XheVLmGwLMBkQ --orderTrackingBaseUrl=https://igikoni.netlify.app/#/track/ --spring.data.mongodb.database=uburiro --spring.data.mongodb.uri=mongodb+srv://nikuzejl:MweneMasabo123@masabo.ckotgan.mongodb.net/?retryWrites=true&w=majority --stripe.public.key=51OS4yRLptKRLdiAum16OsZAkfrkYP79BMuqSNndgXKqjp4ZQKfduhBS2Br3IPeE4H2PHtwoLdfIhwT2Hb3f582ms00R5iX38Dv --stripe.secret.key=sk_test_51OS4yRLptKRLdiAuxTEsw5pfqDFYiO2dy6mONjSqTzNvF8XZ2Jb1X81tle0jXQAZHYVoQHYJbOyD5FkLLRMKS9ZH002iTmZSym`

`C:\Users\Masabo\Desktop\Software\cloudflared\cloudflared-windows-amd64.exe --url http://localhost:9000`

`cloudflared tunnel --url http://localhost:9000`

`netlify deploy --prod`

# 403 error
https://community.render.com/t/direct-link-403-issue/9374/3

# Other links
https://www.youtube.com/watch?v=KxqlJblhzfI&t=10s
https://www.youtube.com/watch?v=o8DEk4XGcZw
https://github.com/bezkoder/angular-16-jwt-auth
https://github.com/bezkoder/spring-boot-login-mongodb
