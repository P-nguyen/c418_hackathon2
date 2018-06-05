
// $( document ).ready(grabFoodName)
// function grabFoodName(){
//     let food=window.location.href;
//     youtubeServerCall(food)
// }

function youtubeServerCall(food){
    const data={
        url:'http://s-apis.learningfuze.com/hackathon/youtube/search.php',
        method:'POST',
        dataType: "json",
        data:{"q":food+" recipe",
              "maxResults": 3,
              "detailLevel":"verbose"},
        success:foodVideos
    }
    $.ajax(data)
}

function foodVideos(videos){
  for(var video in videos.data){
     console.log( videos.data[video]);
  }
}
