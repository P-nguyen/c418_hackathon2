class YoutubeApi {
  static youtubeServerCall(food) {
    const data = {
      url: "http://s-apis.learningfuze.com/hackathon/youtube/search.php",
      method: "POST",
      dataType: "json",
      data: {
        q: `${food} recipe`,
        maxResults: 6,
        detailLevel: "verbose"
      },
      success: foodVideos
    };
    $.ajax(data);
  }
}

function foodVideos(videos) {
  for (let video in videos.data) {
    const videoBody = $("<div>", {
      class: `videoDiv video-${videos.data[video].id.videoId}`,
      on: {
        click: () => {
          openYoutubeModal(videos.data[video]);
        }
      }
    });
    const title = $("<p>", {
      class: "videoImageTitle",
      text: videos.data[video].snippet.title
    });
    const videoImage = $("<img>", {
      src: `${videos.data[video].snippet.thumbnails.medium.url}`
    });
    videoBody.append(videoImage, title);

    $(".youtubeVideos").append(videoBody);
  }
}

function openYoutubeModal(videoClicked) {


  let youtubeVideo = $("<iframe>", {
    width: "100%",
    height: "100%",
    src: `http://www.youtube.com/embed/${videoClicked.id.videoId}`,
    frameborder: "1"
  });
  $(".youtubeModal").append(youtubeVideo);

  $(".modal").removeClass("hide");
}

function closeYoutubeModal() {
  $(".youtubeModal").html("");
  $(".modal").addClass("hide");
}
