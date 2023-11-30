# Docker
docker build -t nikuzejl/igikoni-ui:latest .
docker run --rm -it -p 4200:80 nikuzejl/igikoni-ui:latest

# Angular material
https://www.angularjswiki.com/angular/angular-material-icons-list-mat-icon-list/

# App deployed to Netlify
`ng build --configuration=production`
* At https://app.netlify.com/sites/igikoni/deploys, deploy manually the built folder ./dist/igikoni-ui
* App becomes at https://igikoni.netlify.app

# Adding new restaurants and meals
Go to `/management` and fill out the forms

# Other links
https://www.youtube.com/watch?v=KxqlJblhzfI&t=10s
https://www.youtube.com/watch?v=o8DEk4XGcZw
https://github.com/bezkoder/angular-16-jwt-auth
https://github.com/bezkoder/spring-boot-login-mongodb
