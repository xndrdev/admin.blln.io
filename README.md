# admin.blln.io

[Balloon](http://blln.io) admin interface.

## Development

1.  Run `docker-compose up`
1.  Run `./docker-exec` to exec to the Node.js container
1.  In the container run your `node` commands (e.g. to test smth.)
1.  In the container run `npm start` and navigate to [localhost:3000](http://localhost:3000)

You can always lint your code via `npm run lint`.

## Example `.env` file

```
DB_NAME=postgres
DB_USERNAME=postgres
DB_PASSWORD=12345678
DB_HOST=admin.blln.io-postgres
DB_PORT=5432
INITIAL_PASSWORD=12345678
USE_SSL=false
```
