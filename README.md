# GraphQL API - Santex-Football!

This repository is intended to expose the solution code to a problem through **GraphQL** architecture for HTTP communication consuming certain domain APIs.


# Project Structure
```
|--src
		|-- config
		|-- domain
		|-- infrastructure
		|-- repositories
		|-- resolvers
		|-- services
		|-- utils
		|--index.js
	|--.env.example
	|-- eslitignore
	|-- .eslintrc
	|-- docker-compose.yml
	|-- Dockerfile
	|-- README.md
	|--.gitignore
	|--package.json
	|--package-lock.json
	|-- tsconfig.json
```

## App Architecture:

The architecture of the application is based on a clean architecture, in order to achieve decoupling of responsibility and increase the capacity for maintenance, scalability and continuous improvement.

Although it is a test project only and does not require any type of strict evolutionary architecture, I think it is important to make clear some evidence of how an application that scales into the future can be made.

## Tools

- Node.js
- Type-graphql
- Express.js
- Mongoose (for Mongodb)
- Axios
- Apollo Server
- Typescript
- MongoDB as NoSQL Database

## Solution

The solution of the problem was framed in several aspects.

1. **Architecture:**
Regarding architecture, it has always been a fact to use a clean architecture or at least a variation of it that fulfilled the condition of being able to decouple the layers; For this, the Dependency Injection and Inversion of Control design pattern was used to be able to have the desired decoupling.
Once this was resolved, it was also important to create a sufficiently effective communication structure, with small DDD (Domain-driven Design) definitions for the definitions of the context of each section, use cases and others. The use of Typescript to create the backend was more than useful to maintain consistency in the values, generate contracts between layers and to be able to keep the domain separate.
Scalability, maintenance, performance were characteristics that were tried to capture in the test.

2. **Use cases:**
The use cases start from the business rules (later a disclaimer) so it was necessary to create the different queries or mutations that met the requirement of the problem. In addition to this, it was necessary to test the API to be consulted to obtain the possible variants and create business definitions.

3. **Manual test**
Finally, it ends with a couple of manual tests to guarantee certain basic flows.

## Flows

1. Import league with league code
	- If the league exist in the API, so a success message is returned if the import was done well
	- It the league doesn't exist in the API, return a message with the related error
2. When the league is imported, at the same time the app get the teams related.
3. Get the league with the teams related
	- If the leagueCode doesn't exist in the DB, will return a meessage with the error
4. It the App has a status code 429 (Too many requests) the API will show the according message to let know to the user the restriction in that minute.

## Friendly Disclaimer
- The API https://www.football-data.org/documentation/quickstart has changed his behavior according to the email exposed
- For the free API KEY it is impossible to get the players of all team in a league, I don't know if this could be done before, however in the current form it can't (even changing the API version)
- Not all the query filters works.
-  With the Tier plan not all the leagues could be requested
- According to this **I hade to change a little bit the app behavior according to the expected in the test** just to be compliant with the thecnical test and show all my skills to build an app. 
- For the previous reason all the flows related with the Players were excluded because the API didn't have expose the whole data

## Code Smell and Future Improvements
1. Add Unit Test (I could do it for the time)
2. Add Cache System (I could do it for the time)
3. Variable renames according to DDD
4. Implementes a CI/CD + IaaS
5. Add loggers


**Author:**
Sebastian Vallejo Rojas