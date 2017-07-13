class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      videos: [],
      currentVideo: {}
    }
  }

  onEntryClick(songObject) {
    this.setState({
      currentVideo: songObject
    })
  }

  componentDidMount() {
    var options = {
      key: window.YOUTUBE_API_KEY,
      query: 'puppies',
      max: 10
    }
    this.props.searchYouTube(options, (data) => {
      this.setState({
        videos: data,
        currentVideo: data[0]
      })
    })
  }

  render() {
    return <div>
      <Nav />
      <div className="col-md-7">
        <VideoPlayer video={this.state.currentVideo}/>
      </div>
      <div className="col-md-5">
        <VideoList onEntryClick={this.onEntryClick.bind(this)} videos={this.state.videos}/>
      </div>
    </div>
  }

};

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.App = App;
