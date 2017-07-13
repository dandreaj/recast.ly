var searchYouTube = (options, callback) => {
  var youTubeData = {
    part: 'snippet',
    q: options.query,
    maxResults: options.max,
    key: options.key,
    type: 'video',
    videoEmbeddable : true

  }
  $.ajax({
  url: 'https://www.googleapis.com/youtube/v3/search',
  type: 'GET',
  data: youTubeData,
  contentType: 'application/json',
  success: function (data) {
    callback(data.items);
  },
  error: function (data) {
    console.error('error', data);
  }
});
};

window.searchYouTube = searchYouTube;
