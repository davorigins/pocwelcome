FROM node:16.13.1

ARG DATABASE_URL=${DATABASE_URL}
ARG PORT=${PORT}

EXPOSE ${PORT}
EXPOSE 5432

# Install dependencies

WORKDIR /app
COPY . /app

RUN npm config set registry https://registry.npmjs.org/
RUN npm install
RUN npm start


# Set up a default command
CMD [ "npm","start" ]