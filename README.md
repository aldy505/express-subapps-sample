this is just a quick example of how to make an express app with its' subapps.

what is subapps? pretty much it's an express app inside an express app. so basically this:

```js
import express from "express";

const app1 = express();

const app2 = express();
app2.get("/", (req, res) => res.send("sup world"));

app1.use("/sup", app2);
app1.listen(3000);
```

when you visit `localhost:3000/sup` you'll get `"sup world"`.

there are more examples for typescript and codegen version. check the brances.

no pr, no issue, no wiki, no discussion. thanks.

oh, and this uses npm workspaces, so you'll need either npm v7 or node 16.

install all the dependencies with `npm install --workspaces`. then run the app with `npm run start`.

for typescript branch, you can use `npm run dev` for running the typescript files directly.
and `npm run build` to build them into `./dist` folder,
then run it with `npm run start`.
