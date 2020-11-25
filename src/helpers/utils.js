import bcrypt from "bcryptjs";
import multer from 'multer';
import path from 'path';
import axios from 'axios';
export const genHash = data => {
    let salt = bcrypt.genSaltSync(8);
    return bcrypt.hashSync(data, salt)
}
export const compare = async (p1, hash) => {
    return await bcrypt.compare(p1, hash);
}
export const upload = multer({
    storage: multer.diskStorage({
        destination: 'public/uploads/files',
        filename: function (req, file, cb) {
            ////cnole.log(file);
            const start = Date.now();
            cb(null, `file${start}${path.extname(file.originalname)}`);
        }
    })
});
// export const sendMessage = async (to, body, isOTP = false) => {
//     try {
//         const sender = process.env.SENDER_ID, sid = process.env.SID, apiKey = process.env.API_KEY, url = process.env.KALEYRA_URL, headers = { 'api-key': apiKey };
//         let typeCondition = {}
//         if (isOTP) {
//             typeCondition = { type: 'OTP' }
//         }
//         const result = await axios.post(`${url}/v1/${sid}/messages`, {
//             to,
//             body,
//             sender,
//             ...typeCondition
//         }, { headers });
//         console.log(result);
//     } catch (error) {
//         console.log(error)
//     }
// }

export const sendMessage = async (to, body = false) => {
    try {
        const apikey = 'Afddf4b42aaa707c9a4248c362dc41121';
        const sender = 'INFINI'
        await axios.get('https://api-alerts.kaleyra.com/v4/?api_key=' + apikey + '&method=sms&message=' + body + '&to=' + to + '&sender=' + sender, (resp) => {
            let data = '';
            resp.on('data', (chunk) => {
                data += chunk;
            });
            resp.on('end', () => {
                console.log(data);
            });
        });
    } catch (error) {
        console.log(error)
    }
}

export const generateUnique = (source, num) => {
    const str = `${num}`,
        pad = `00000`;
    return source + (pad.substring(0, pad.length - str.length) + str);
}
export const isCheckUser = (...userTypes) => {
    return (req, res, next) => {
        if (!userTypes.some(_ => `${_}` in req)) {
            return res.notAuthorized('User not allowed to call this api.');
        }
        next();
    }
}

/*function utils() {
    const methods = {
        genHash: function (data) {
            let salt = bcrypt.genSaltSync(8);
            return bcrypt.hashSync(data, salt)
        },
        compare: async (p1, hash) => {
            return await bcrypt.compare(p1, hash);
        },
        upload: () =>{
            
        }
    }
    return Object.freeze(methods);
}
module.exports = utils();*/