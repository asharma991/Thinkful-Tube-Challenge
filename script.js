var vidID = "";
$(() => {
  $("#search-term").on("submit", event => {
    event.preventDefault();
    var searchTerm = $("#query").val();
    getRequest(searchTerm);
    $("#query").val("");
  });
  $("");
});

var getRequest = searchTerm => {
  searchTerm = searchTerm.split(" ").join("%20");
  var params = {
    q: searchTerm,
    part: "snippet",
    maxResults: 10
  };
  var url =
    "https://www.googleapis.com/youtube/v3/search?key=AIzaSyCk4BdHTtHwrbPW7XW-W5-FnJ8QX9lVjQ0";
  $.getJSON(url, params, data => {
    showResults(data.items);
  });
};

var showResults = arr => {
  $("div#search-results").html("");
  arr.forEach(element => {
    var vidURL = "https://www.youtube.com/watch?v=" + element.id.videoId;
    $("div#search-results").append(
      `<div class="video-thumbnail-div">
      <a href=${vidURL} target="_blank" rel="noopener noreferrer">
        <img src=${element.snippet.thumbnails.medium.url} />
          <h4>${element.snippet.title}</h4>
      </a>
       </div>`
    );
  });
};
