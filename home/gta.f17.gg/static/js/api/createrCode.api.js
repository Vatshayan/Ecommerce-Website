import BaseApi from './base.api'

export default class CreaterCode extends BaseApi {
    constructor() {
        super()
        this.firstPath = '/creator-codes'
    }

    async index() {
        this.setIndexUrl()

        return await this.getData()
    }

    async checkCreaterCode({
        code
    } = {}) {
        this.setSubdiretory(this.firstPath).url = this.domain + this.subdiretory

        this.url = this.url + "/check-creater-code"
        this.params = `/${code}`
        return await this.setParamsToUrl().getData()
    }

    private

    setIndexUrl() {
        const indexPath = '/index'
        this.setSubdiretory(this.firstPath).url = this.domain + this.subdiretory
        this.url = this.url + indexPath
    }
}