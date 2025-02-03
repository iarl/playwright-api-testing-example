# API Automation framework with Playwright example

All tests are present under **/tests**

## Prerequisites

Make sure you have installed all the following prerequisites on your development machine:

- Node.js - [Download & Install Node.js version 18 or higher](https://nodejs.org/en/download/) and the npm package manager.
- Docker(optional) - [Dowmload & Install Docker Engine and Docker Compose](https://docs.docker.com/desktop/)

## Installation

- Clone this repo
- Go to the project directory
- Create `.env` file like in example `.env.example`
- Open terminal and run `npm install` to install dependencies

## Run the tests
### Docker
- Open terminal and run `make start`
- Run `docker logs -f playwright-api-tests` to see the results

### Locally

- Open terminal and run `npm test`
- The results will displayed in the terminal