import fs from 'fs';
import path from 'path';

const env = process.env.NODE_ENV || 'development';
const envFilePath = path.join(__dirname, `${env}.json`);
let _config = null;

if (fs.existsSync(envFilePath)) {
    const envData = JSON.parse(fs.readFileSync(envFilePath))
    console.log(envData);
    _config = envData;
}

const get = (keyPath) => {
    let keys = keyPath.split('.');
    if (keys.length == 0) return undefined;
    keys = keys.reverse();
    
    let value = _config;
    while (keys.length) {
        var k = keys.pop();
        if (!value.hasOwnProperty(k)) {
            return undefined;
        } else {
            value = value[k];
        }
    }
    return value;
};

export default {
    get
};