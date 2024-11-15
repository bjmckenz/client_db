# Starter Pack for using PostgreSQL with Svelte and SvelteKit

## uses 'postgres' npm package

# Assumptions:

1. you know how to type commands at a shell/terminal prompt

2.  you have git installed.

3. you have Node.js installed

# running:

1. git clone this

2. Install PostgreSQL on your computer and start the server.
   * Take note of any passwords you change!

3. I recommend installing the "PostgreSQL" VSCode extension by Weijan Chen so you can investigate the DB.

4. Connect to it from the PostgreSQL extension in VSCode - click Connect.

5. Create a database (e.g., 'containers')
   * Best to do this from the PostgreSQL extension in VS Code - click on the '+' after making a connection.

6. Open a PSQL window and paste in the schema (from ```schema.sql```) in it.
   * Best to do this from the PostgreSQL extension in VS Code - click the tiny icon on "containers" that looks like a terminal

7. create ```.env``` file with contents ```PGCONNECT=postgres://bjmckenz:yourpass@localhost:5432/containers``` in the project root (NOT inside SRC)
   * Substitute at least your name, and perhaps where your DB is installed.

6. npm install

7. npm run dev
   * click the link that is shown in the output.

*Comments and feedback are welcome!*

# Where am I deployed?

*Replace this entire line with the URL*


