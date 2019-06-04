const express = require('express');

const db = require('../dogs/dogsmodule.js');

const server = express();

server.use(express.json());

server.post("/api", (req, res) => {
    const { name, breed } = req.body;
    const addition = { name, breed };
    if (!name) {
      return res
        .status(400)
        .json({ error: "Please provide a name for your addition" });
    }
    db.add(addition)
      .then(add => {
        res.status(201).json(add);
      })
      .catch(({ code, message }) => {
        res.status(code).json({ message });
      });
  });
  
  server.get("/api", (req, res) => {
    db.get()
      .then(found => {
        res.status(200).json(found);
      })
      .catch(({ code, message }) => {
        res.status(code).json({ message });
      });
  });
  
  server.delete("/api/:id", async (req, res) => {
    const { id } = req.params;
    db.remove(id)
      .then(remove => {
        if (remove) {
          res.status(204);
        } else {
          res.status(404).json({
            errormessage: "Unable to find any entry matching the provided ID"
          });
        }
      })
      .catch(({ code, message }) => {
        res.status(code).json({ message });
      });
  });
  
  server.put("/api/:id", (req, res) => {
    const { id } = req.params;
    const { name, breed } = req.body;
    const changes = { name, breed };
    if (!name) {
      return res
      .status(400)
      .json({ error: "Please provide a name in your changes" })
    }
    db.modify(id, changes)
      .then(updated => {
        if (updated) {
          res.status(200).json(updated);
        } else {
          res.status(404).json({
            errormessage: "Unable to find entry matching the provided ID"
          });
        }
      })
      .catch(({ code, message }) => {
        res.status(code).json({ message });
      });
  });

  module.exports = server;