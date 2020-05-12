# README

## OSX - System Requirements

* Ruby 2.6.3
* Homebrew [(if you don't have brew)](https://brew.sh)
* [Docker](https://www.docker.com/)
  * [how to install mac gui!(preferred)](https://docs.docker.com/docker-for-mac/install/)
  * [install through terminal](https://docs.docker.com/docker-for-mac/)

## Setup Instructions

* Run ```docker -v``` in your terminal to ensure you have docker installed
* Clone the repository in your working directory
  * ```git clone https://github.com/byee322/maxsumtreeapp3.git```
* Go into folder```cd maxsumtree3```
* Run ```docker-compose up --build```
* In a seperate terminal ```docker-compose run app rake db:create db:migrate```
* Please visit ```localhost:3000``` in your browser and find that max tree!

## Run the tests
```docker-compose run app rspec```
