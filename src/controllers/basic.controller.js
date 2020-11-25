class Basic {
    constructor(scope){
        this.basicRepo = scope.basicRepo;
    }
    async task1(req, res){
        try {
            const {input} = req.body;
            const result = await this.basicRepo.oddEvent(input);
            return res.success(result);
        } catch (error) {
            return res.error(error);
        }
    }
    async task2(req, res){
        try {
            const {input} = req.body;
            const result = await this.basicRepo.stringPlace(input);
            return res.success(result);
        } catch (error) {
            return res.error(error);
        }
    }
    async task3(req, res){
        try {
            const {input} = req.body;
            const result = await this.basicRepo.missingNumbers(input);
            return res.success(result);
        } catch (error) {
            return res.error(error);
        }
    }
}
export default Basic;