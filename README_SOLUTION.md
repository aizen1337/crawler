# Recruitment Task Solution

## Directory Structure
I've chosen simple mvc'ish approach, with additional api folder containing requests to external api's (in the future i'd rather abstract this away into some logic layer)
## Dependencies
I used axios for requests and express for easier http api development, using native node apis could also work but I've chosen solutions I'm familiar with
## Running 
Run `docker-compose up --force-recreate --build`

It should build both simulation and crawler containers, they communicate via internal network, for the simplicity I've copy-pasted .env file into image.  

Initially crawler api is exposed on port 1337 on endpoint:

`http://localhost:1337/api/client/state`

Polling api is designed to fetch data each second and map it according to requirements. I've also thought of failover so when simulation process is restarted it caches the last succesful fetch (I think outdated response is better than empty).