FROM ubuntu:18.04
# All my thanks goes to Abdulrahman Alotaibi for helping me understand running code in a sandbox 
# from the client-side to the running it in an isolated instance using docker.
MAINTAINER Abdulrahman Alotaibi

# Updates the package lists for upgrades
RUN apt-get update -y
RUN apt-get install curl vim sudo build-essential -y
RUN curl -sL https://deb.nodesource.com/setup_10.x | bash
# This is called 'build-essentials' : metapackage that install many other packages such as g++
# RUN apt-get install curl vim sudo build-essential 


# Install compilers
RUN apt-get install -y gcc
RUN apt-get install -y g++
RUN apt-get install -y ruby
RUN apt-get install -y python
RUN apt-get install -y nodejs

## for apt to be non-interactive
ENV DEBIAN_FRONTEND noninteractive
ENV DEBCONF_NONINTERACTIVE_SEEN true
RUN apt-get install -y php7.2

# RUN apt-get install -y npm
RUN apt-get install -y golang-go	
RUN apt-get install -y scala
RUN apt-get install -y gobjc

RUN useradd -ms /bin/bash newuser
USER newuser
COPY /scripts /runner
RUN npm i
WORKDIR /usercode

RUN echo "sandbox image built successfully."