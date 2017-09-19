import React, { Component } from 'react'
import { ScrollView } from 'react-native'
import axios from 'axios'
import AlbumDetail from './AlbumDetail'

class AlbumList extends Component {
  state = {
    loading: true,
    albums: []
  }

  componentWillMount() {
    axios.get('https://rallyCoding.herokuapp.com/api/music_albums')
      .then(response => this.setState({ albums: response.data, loading: false }))
  }

  renderAlbums() {
    return this.state.albums.map(album =>
      <AlbumDetail key={album.title} album={album} />
    )
  }

  render() {
    return (
      <ScrollView>
        {!this.state.loading && this.renderAlbums()}
      </ScrollView>
    )
  }
}

export default AlbumList
