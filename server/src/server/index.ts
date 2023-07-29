import app from "../index";
import { PORT } from "../config";

const port = PORT;

app
    .listen(port, () => {
        console.log(`Server listening on port ${port}`);
    })
    .on('connection', () => console.debug('Hi! Connection stablished'));
