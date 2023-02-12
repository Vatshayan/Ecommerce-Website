import BaseApi from './base.api'
const PAY_LIST_ITEMS_PATH = '/playlistItems'

export default class YoutubeApi extends BaseApi {
    constructor() {
        super()
        this.domain = 'https://www.googleapis.com/youtube/v3'
    }

    async getListPaylistItem() {
        const res = await this.setUrl().getData()

        const videoIds = this.handleResponsePaylistItem(res)
        return videoIds
    }

    setPlaylistId(playlistId) {
        if (!playlistId) return this

        this.playlistId = playlistId
        return this
    }
    setPartsParams(parts) {
        if (!parts) return this

        this.part = ''
        parts.forEach(part => this.part += `&part=${part}`)
        return this
    }

    private

    setKey() {
        this.url = this.url + "?key=" + process.env.REACT_APP_GOOGLE_KEY
    }

    setUrl() {
        this.url = this.domain + PAY_LIST_ITEMS_PATH
        this.setKey()
        this.url = `${this.url}&playlistId=${this.playlistId}${this.part}`

        return this
    }

    handleResponsePaylistItem(res) {
        const items = res.items
        if (!items) return

        const contentDetails = items.map(item => item.contentDetails)
        const videoIds = contentDetails.map(content => content.videoId)
        return videoIds
    }
}