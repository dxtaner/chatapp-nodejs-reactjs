const shortid = require("shortid");
const _ = require("lodash");
const redisClient = require("../clients/redis");

// console.log("redisClient", redisClient);

const Messages = {
  client: redisClient,

  upsert: function ({ message }) {
    this.client.hset(
      "messages",
      shortid.generate(),
      JSON.stringify({
        message,
        when: Date.now(),
      }),
      (err) => {
        if (err) {
          console.error(err);
        }
      }
    );
  },

  list: function (callback) {
    let messageList = [];

    this.client.hgetall("messages", (err, messages) => {
      if (err) {
        console.error(err);
        return callback([]);
      }

      if (messages && Object.keys(messages).length > 0) {
        for (let messageId in messages) {
          messageList.push(JSON.parse(messages[messageId]));
        }
      }

      return callback(_.orderBy(messageList, "when", "asc"));
    });
  },
};

module.exports = Messages;
