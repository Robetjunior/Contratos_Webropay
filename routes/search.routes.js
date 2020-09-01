const { Router } = require("express");
const router = express.Router();

const client = require("../config/config");

//ADD NEW CONTRACTS
router.post("/contratos", (req, res) => {
  const { decription, status } = req.body;
  const query = `
    INSERT INTO contracts (decription, status) VALUES ( ${decription}, ${status})
    `;
  client.query(query, (err, res) => {
    if (err) {
      console.log(err);
      return;
    }

    res.status(200).json(res);
    client.end();
  });
});

//LISTAR NOVO CONTRATO
router.get("/contratos", (req, res) => {
  const { decription, status } = req.body;
  const query = `
      SELECT * FROM contracts   
    `;
  // UPDATE contracts SET ${description}, ${status} WHERE _id = 1
  client.query(query, (err, res) => {
    if (err) {
      console.log(err);
      return;
    }

    res.status(200).json(res);
    client.end();
  });
});

//UPDATE CONTRATO
router.post("/contratos/{_id}", (req, res) => {
  const { decription, status } = req.body;
  const { _id } = req.params;
  const query = `
      UPDATE contracts SET ${decription}, ${status} WHERE _id = ${_id}
    `;

  client.query(query, (err, res) => {
    if (err) {
      console.log(err);
      return;
    }

    res.status(200).json(res);
    client.end();
  });
});
