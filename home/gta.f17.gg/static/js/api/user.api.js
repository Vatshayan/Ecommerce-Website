import BaseApi from './base.api'

export default class UserApi extends BaseApi {
    constructor() {
        super()
        this.setSubdiretory("/player").url = this.domain + this.subdiretory
    }

    async searchBy({
        citizenId
    } = {}) {
        this.params = citizenId
        return await this.setParamsToUrl().getData()
    }
}