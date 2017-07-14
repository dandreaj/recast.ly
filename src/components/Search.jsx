var Search = (props) => {
  var changeHandler = (event) => {
    // console.log(event.nativeEvent.target.value);
    props.onSearchBarEntry(event.nativeEvent.target.value)
  }
  return <div className="search-bar form-inline">
    <input onChange={changeHandler} className="form-control" type="text" />
    <button className="btn hidden-sm-down">
      <span className="glyphicon glyphicon-search"></span>
    </button>
  </div>
};

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.Search = Search;
