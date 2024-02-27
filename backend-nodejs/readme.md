Chat App with Socket.IO
=======================

Installation
------------

1.  Clone the repository:

    git clone <repository_url>

3.  Navigate to the project directory:

    cd chat-app

5.  Install dependencies:

    npm install

Usage
-----

To start the server, run:

    node app.js

By default, the server will run on port 3033. You can access the application by visiting [http://localhost:3033](http://localhost:3033) in your web browser.

Dependencies
------------

*   [Express](https://expressjs.com/): Fast, unopinionated, minimalist web framework for Node.js.
*   [Socket.IO](https://socket.io/): Real-time bidirectional event-based communication library.

Structure
---------

*   `app.js`: Main application file containing the server setup and Socket.IO configuration.
*   `lib/Messages.js`: Module to handle message storage and retrieval.

Features
--------

*   Real-time messaging: Users can send and receive messages instantly.
*   Message storage: Messages are stored persistently to ensure they are accessible even after a user disconnects.

How It Works
------------

1.  When a user connects to the server, the server logs a message indicating the connection.
2.  Existing messages are retrieved from storage and sent to the newly connected user.
3.  When a user sends a new message, it is stored and broadcasted to all connected users.
4.  If a user disconnects, the server logs a message indicating the disconnection.

Contributing
------------

Contributions are welcome! Feel free to submit pull requests or open issues if you encounter any problems or have suggestions for improvements.

License
-------

This project is licensed under the [MIT License](LICENSE).
