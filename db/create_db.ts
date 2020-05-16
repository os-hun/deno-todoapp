import { Client } from "https://deno.land/x/mysql/mod.ts";

// database
const client = await new Client().connect({
  hostname: "127.0.0.1",
  username: "root",
  password: "",
});
// create database
await client.execute(`CREATE DATABASE IF NOT EXISTS deno_todo`);
console.log('create database successfully.');
