import BaseApi from '../base.api'

export default class payPalWebhookApi extends BaseApi {

    constructor() {
        super()
        this.setSubdiretory("/api/v1/paypal/webhooks").url = this.domain + this.subdiretory
    }
    async loadPaymentPayPal({
        tranId,
        ackTime,
        amount,
        currencyCode,
        status,
        partnerId,
        citizenId,
        fcoin,
        createrCode
    } = {}) {
        const data = {
            tranId: tranId,
            ackTime: ackTime,
            amount: amount,
            currencyCode: currencyCode,
            status: status,
            partnerId: partnerId,
            citizenid: citizenId,
            fcoin: fcoin,
            createrCode: createrCode
        }
        this.setData(data)
        return await this.postData()
    }
}