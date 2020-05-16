import { serve } from "https://deno.land/std/http/server.ts";

const server = serve({ port: 3000 });
console.log('Server is up on port 3000!!');
for await (const req of server) {
  req.respond({
    status: 200,
    body: 'Hello Deno!!'
  });
}
