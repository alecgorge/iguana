FROM node:5.3.0-onbuild

ENV APP_HOME /app
RUN mkdir $APP_HOME
WORKDIR $APP_HOME

ADD . $APP_HOME

RUN cd $APP_HOME; npm install
