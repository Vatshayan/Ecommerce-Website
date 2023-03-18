export default class CurrencyConversionService {
    constructor(fcoin) {
        this.fcoin = fcoin
        this.type = "VND" || "USD"
        this.amount = 0
        this.denominations = 22
        this.gift = 0
    }

    setType(type) {
        this.type = type
    }

    perform() {
        this.fcoin = parseInt(this.fcoin);

        if (this.type === "USD") {
            if (this.fcoin >= 550) this.amount = (this.fcoin * 0.9) / this.denominations;
            else this.amount = this.fcoin / this.denominations;

            return Math.round(this.amount * 10) / 10
        } else {
            if (this.fcoin >= 550) return this.fcoin * 0.9 * 1000;
            else return this.fcoin * 1000;
        }
    }

    getGiftByPercent(percent) {
        percent = parseInt(percent)
        this.gift = (percent * this.fcoin) / 100
        if (this.gift !== 0 && this.gift < 1) this.gift = 1

        return this.gift
    }

    getFcoinWithGift() {
        return parseInt(this.fcoin) + parseInt(this.gift)
    }
}