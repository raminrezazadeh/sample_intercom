import express from 'express';
import {applicationConfigs} from './config';
const app = express();

app.listen(applicationConfigs.port, (err) => {
    if (err) {
        return console.log('Error starting');
    }
    return console.log(`Server listening on port ${applicationConfigs.port}`);
});
