import React from "react"
import {listTab} from "./data"
import "./ListVideo.scss"
import YoutubeApi from '../../../api/youtube.api'
import ListVideoUi from "./ListVideoUi"
const youtubeApi = new YoutubeApi()

class ListVideo extends React.Component {
  state = { videos: listTab }

  componentDidMount() {
    this.getListPaylistItem()
  }

  getListPaylistItem() {
    listTab.forEach( (listItem, index) => {
      const listId = listItem.listId
      if(!listId) return;

      youtubeApi.setPlaylistId(listId)
      .setPartsParams(['id', 'contentDetails'])
      .getListPaylistItem()
      .then(videoIds => {
        listTab[index].videoIds = videoIds
        this.setState({videos: listTab})
      })
    })
  }

  render() {
    return (
      <ListVideoUi videos={this.state.videos}/>
    );
  }
}

export default ListVideo;
