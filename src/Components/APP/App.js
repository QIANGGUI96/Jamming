import React from 'react';
import './App.css';
import SearchBar from '../SearchBar/SearchBar';
import SearchResults from '../SearchResults/SearchResults';
import Playlist from '../Playlist/Playlist';


class App extends React.Component{
  constructor(props){
    super(props);
    this.state={
      searchResults:[{name:'like1',artist:'simple1',album:'good1',id:'1'},
      {name:'like2',artist:'simple2',album:'good2',id:'2'},
      {name:'like3',artist:'simple3',album:'good3',id:'3'}],
      playlistName:'12',
      playlistTracks:[{name:'summer1',artist:'wood1',album:'omg1',id:'4'},
      {name:'summer2',artist:'wood2',album:'omg2',id:'5'},
      {name:'summer3',artist:'wood3',album:'omg3',id:'6'}]
    }
    this.addTrack=this.addTrack.bind(this);
    this.removeTrack=this.removeTrack.bind(this);
    this.updatePlaylistName=this.updatePlaylistName.bind(this);
    this.savePlaylist=this.savePlaylist.bind(this);
    this.search=this.search.bind(this)
  }
  addTrack(track){
    let tracks=this.state.playlistTracks
    if (tracks.find(item=>item.id===track.id)) {
      return;

    }
    tracks.push(track)
    this.setState({playlistTracks:tracks})

  }
  removeTrack(track){
    let tracks=this.state.playlistTracks
    
    let newTracks= tracks.filter(item=>item.id!==track.id)
    this.setState({playlistTracks:newTracks})

  }
  updatePlaylistName(name){
    this.setState({
      playlistName:name
    })

  }
  savePlaylist(){
    const trackURIs=this.state.playlistTracks.map(track=>track.uri)
  }

  search(term){
    console.log(term)

  }

  render(){
    return (<div>
    <h1>Ja<span className="highlight">mmm</span>ing</h1>
    <div className="App">
      <SearchBar onSearch={this.search}/>
      
      <div className="App-playlist">
      <SearchResults searchResults={this.state.searchResults} onAdd={this.addTrack}/>
      <Playlist playlistName={this.state.playlistName} 
      playlistTracks={this.state.playlistTracks} 
      onRemove={this.removeTrack}
      onNameChange={this.updatePlaylistName}
      onSave={this.savePlaylist}
      />
      </div>
    </div>
  </div>)
  }






}

  

export default App;
