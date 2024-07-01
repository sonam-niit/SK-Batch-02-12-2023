const express = require('express');
const storage = require('node-persist');
const app = express();
app.use(express.json()); //body parser
//init storage
storage.init();
app.get("/todo", async (req, res) => {
    const tasks = await storage.values();//get all objects
    res.status(200).send(tasks);
})
app.post("/todo", (req, res) => {
    const { task, id } = req.body;
    //in value we are passing one object with tast and completed keys
    storage.setItem(id, { task, completed: false });
    res.status(201).send('Task added successfully');
})
app.delete("/todo/:id", async (req, res) => {
    const id = req.params.id;
    const data = await storage.getItem(id);
    if (data) {
        storage.removeItem(id);
        return res.send('Task Deleted');
    }
    res.send('No Item found to delete')
})
app.put("/todo/:id", async (req, res) => {
    const id = req.params.id;
    const data = await storage.getItem(id);
    if (data) {
        data.completed = true;
        storage.setItem(id, data);
        return res.send('Item Updated');
    }
    res.send('No Item found to update')
})
app.listen(5000, () => console.log('Server Started'))