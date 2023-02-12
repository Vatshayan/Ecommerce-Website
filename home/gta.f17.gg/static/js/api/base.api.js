export default class BaseApi {
    constructor() {
        this.domain = process.env.REACT_APP_SERVER_PAYMENT_URL
        this.timeout = 600000
        this.contentType = "application/json"
        this.cache = 'no-cache'
        this.data = {}
        this.params = ''
        this.subdiretory = ''
    }

    async postData() {
        const response = await fetch(this.url, {
            method: 'post',
            mode: 'cors',
            cache: this.cache,
            headers: {
                'Content-Type': this.contentType
            },
            body: JSON.stringify(this.data)
        });
        return response.json();
    }

    async getData() {
        const response = await fetch(this.url, {
            method: 'get',
            mode: 'cors',
            cache: this.cache,
            headers: {
                'Content-Type': this.contentType
            },
        });
        return response.json();
    }

    setParamsToUrl() {
        this.url = this.url + this.params
        return this
    }

    setSubdiretory(subdiretory) {
        this.subdiretory = subdiretory
        return this
    }

    setData(data) {
        this.data = data
    }

    setUrl(url) {
        this.url = url;
        return this
    }
    setDomain(domain) {
        this.domain = domain;
        return this
    }
}