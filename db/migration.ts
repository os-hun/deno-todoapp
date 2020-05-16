import { client } from '../app.ts';

// todos
await client.execute(`DROP TABLE IF EXISTS todos`);
await client.execute(`
  CREATE TABLE todos (
    id int(11) NOT NULL AUTO_INCREMENT,
    content varchar(100) NOT NULL,
    created_at datetime(6) NOT NULL default CURRENT_TIMESTAMP(6),
    destroyed_at datetime(6) default NULL,
    PRIMARY KEY (id)
  ) ENGINE=InnoDB DEFAULT CHARSET=utf8;
`);
