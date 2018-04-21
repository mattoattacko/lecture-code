# http://sqlfiddle.com/#!17/885cb/18

CREATE TABLE IF NOT EXISTS users (
  id SERIAL PRIMARY KEY,
  handle VARCHAR(50)
 );

 INSERT INTO users (handle) VALUES
   ('jetcitysoftware'),
   ('csharper'),
   ('javanuts'),
   ('nodeman');


 CREATE TABLE IF NOT EXISTS tweets (
   id SERIAL PRIMARY KEY,
   users_id INTEGER REFERENCES users(id),
   tweet TEXT,
   likes INTEGER
);

INSERT INTO tweets (users_id, tweet, likes) VALUES
  (1, 'Node is stupid', 0),
  (2, 'Why are we here? Im lonely', 0),
  (3, 'Why wont anyone play with me', 0),
  (1, 'Because you are old...', 0),
  (4, 'Im multithreaded ... ha ha', 0),
  (1, 'That escalated quickly', 0),
  (2, 'Browsers!', 0)


SELECT users.handle, tweets.tweet, tweets.likes
FROM tweets
INNER JOIN users ON tweets.users_id = users.id
WHERE users.id = 1;

SELECT users.handle, tweets.tweet, tweets.likes FROM users, tweets
WHERE tweets.users_id = users.id
AND users.id = 1;