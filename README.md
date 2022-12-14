![img](src/assets/images/better-call-saul.png)

# Better Call Saul quotes API

A simple API to retrieve some quotes of Better Call Saul!

## API

#### Get all quotes

```http
  GET /quotes
```

```
[
    {
		"message": "A good magician never reveals his secrets.",
		"author": "Jimmy McGill"
	},
    {
		"message": "My friends, I promise you that together, we will prosper.",
		"author": "Gustavo Fring"
	},
    {
		"message": "My brother is not a bad person. He has a good heart. It’s just he can’t help himself. And everyone’s left picking up the pieces.",
		"author": "Chuck McGill"
	}
]
```

#### Get one quote

```http
  GET /quotes/${quoteId}
```

| Parameter | Type     | Description                        |
|:----------|:---------|:-----------------------------------|
| `quoteId` | `number` | **Required**. Id of quote to fetch |

```
{
	"message": "S'all Good, Man.",
	"author": "Jimmy McGill"
}

```

#### Get a random quote

```http
  GET /quotes/random
```

```
{
	"message": "I don’t know what image you have of him, past or present, or whatever he did or said, but Jimmy is a good lawyer. And he works very hard.",
	"author": "Kim Wexler"
}

```

## Postman collection

You can integrate the API into Postman thanks to the Postman collection available on the repository.

## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`TYPEORM_TYPE`

`TYPEORM_HOST`

`TYPEORM_PORT`

`TYPEORM_USERNAME`

`TYPEORM_PASSWORD`

`TYPEORM_DATABASE`

## Run Locally

Clone the project

```bash
  git clone https://github.com/emanuelvald/better-call-saul-quotes-api.git
```

Go to the project directory

```bash
  cd my-project
```

Install dependencies

```bash
  npm install
```

Run Migrations

```bash
  npm run typeorm:run
```

Start the server

```bash
  npm run start
```

## Contributing

Feel free to suggest any changes or add new quotes, just do a pull request!