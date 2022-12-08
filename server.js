const express = require("express");
const { errorHandler } = require("./error/errorHandler");
const router = require("./router");

class Server {
  constructor() {
    this.app = express();
    this.setup();
  }

  setup() {
    this.app.use(express.json());
    this.app.use("/api/v1", router);
    this.app.use(errorHandler);
  }

  run(port) {
    this.server = this.app.listen(port, () => {
      console.log(`Server listening on port ${port}`);
    });
  }

  stop(cb) {
    this.server.close(cb);
  }
}

const server = new Server();
server.run(3000);
