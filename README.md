
## Technologies ⚙️
* _Typescript_
* _csv-parse_
* _express_
* _multer_
* _typeorm_

## How to run?
1. Clone the project
1. Write **yarn** at the terminal
1. Create two databases called **gostack_desafio06** and **gostack_desafio06_tests**
1. You need to create a container with PostgresSQL
```bash
docker run --name NOME -e POSTGRES_PASSWORD=SENHA -p 5432:5432 -d postgres
```

```bash
# If you want to create your transactions
yarn dev:server

# If you want to test the project
yarn test

```

## Knowledge adquired in this challenge
At this project we want to create a transactions with categories. Where he have income, outcome and total too.
Has a good service where we can not put outcome if we don't have income > outcome.
We can import .csv files to create a big number of transactions too.
