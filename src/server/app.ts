import {createServer} from '../utils/server';
const PORT: any = process.env.PORT || 3000;
const HOST: string = process.env.HOST ||`localhost`;
const API_VERSION: string = process.env.API_VERSION ||`v1`;
// const dbConnection from "../server/database";

createServer()
  .then(server => {
    server.listen(PORT, () => console.log(`Server listening  http://${HOST}:${PORT}/api/${API_VERSION}`));
  })
  .catch(err => {
    console.error(`Error: ${err}`)
  })