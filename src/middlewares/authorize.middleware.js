import jwt from 'jsonwebtoken';

class Authenticate {
    constructor(scope) {
        
    }

    async isCustomer(req, res, next) {
        if (!req.customer) {
            return res.notAuthorized('User was blocked.');
        }
        const customer = true; // jwt auth happens here
        if (customer) {
            req.customer = customer;
            next();
        } else {
            return res.notAuthorized('This api is not availble to this user.');
        }
    }
}
export default Authenticate;
