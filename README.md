node-red-contrib-jdbc
=====================

Node-RED node to access database using JDBC driver

The JDBC node has the ability to read and write various databases like PostgreSQL and Oracle databases.
By the JDBC driver, this node can access these databases without the Node.js module for them.

## Install

(1) Install Java environment

(2) Run the following command in your Node-RED user directory - typically `~/.node-red`

    npm install node-red-contrib-jdbc

## Usage in PostgreSQL

(1) Start PostgreSQL server to test

    docker run --name postgres -p 5432:5432 -e POSTGRES_PASSWORD=password -d postgres

(2) Download JDBC driver to the user directory

    wget https://jdbc.postgresql.org/download/postgresql-42.2.23.jar

(3) Start Node-RED process in the user directory

    node-red

(4) Place JDBC node and configure property on the Node-RED flow editor

<img src="https://raw.githubusercontent.com/Hitachi/node-red-contrib-jdbc/master/property.png" width="600px">

_If you would like to use the other database, you can specify the other JDBC driver file on the property._

(5) Create flow to pass SQL query to the JDBC node

<img src="https://raw.githubusercontent.com/Hitachi/node-red-contrib-jdbc/master/flow.png" width="600px">

After executing the JDBC node, it outputs the result of the SQL query.

_You can import the example flow from the menu -> Import -> Examples -> node-red-contrib-jdbc -> postgres._

