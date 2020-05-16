import { serve } from "https://deno.land/std/http/server.ts";
import { Client } from "https://deno.land/x/mysql/mod.ts";

const server = serve({ port: 3000 });
console.log('Server is up on port 3000!!');

// database connection
export const client = await new Client().connect({
  hostname: "127.0.0.1",
  username: "root",
  password: "",
  db: "deno_todo",
});

for await (const req of server) {
  req.respond({
    status: 200,
    body: 'Hello Deno!!'
  });
}
