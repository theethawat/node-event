# Practicing Node Event

Node.js Event Driven from Main REST API Server to another service in term of event not REST API Call

The code contain of 2 Node.js Service that is **main** and **database**

### Main

**Main** represent REST API Server it will be recieve request from user and drive event to Message Queue that Running in Port 3300 with ZeroMQ,
It will send 10 times of request into queue with randomly delay between each request

### Database

**Database** represent a long time process, that not access a real database it just a long time delay job. It subscribe task name and payload from the **Main** Server using ZeroMQ and running their queue. And we randomly generate a time to delay in scope that i demonstrate as critical sections.

If program work correctly when you send POST to `/api/manufacturing-order` with any payload the `Number now` at the end of Database code log will be the same (After running on each request you must restart the database server)

## To Play

1. Coming to **main** and run

```
cd main
npm install
npm run dev
```

2. Coming to **database** and run

```
cd database
npm install
```

3. Start Database

```
npm run dev
```

4. POST API Call to `http://localhost:3200/api/manufacturing-order`
5. See the Result both in console of API server and Database Demonstration Server
6. Restart Database Server

```
Ctrl + C
npm run dev
```

7. Running Number 4 Again
