FROM node:8.11.1

WORKDIR /var/www/react-app

RUN npm install

CMD ["/bin/bash"]