
$( document ).ready(grabFoodName)
function grabFoodName(){
    let food=window.location.search;
    food=food.split("=")[1];
    youtubeServerCall(food)
    $(".modal").on("click",closeYoutubeModal);
}

function youtubeServerCall(food){
    
    const data={
        url:'http://s-apis.learningfuze.com/hackathon/youtube/search.php',
        method:'POST',
        dataType: "json",
        data:{"q":`${food} recipe`,
              "maxResults": 3,
              "detailLevel":"verbose"},
        success:foodVideos
    }
    $.ajax(data)
}

function foodVideos(videos){
    console.log(videos);
  for(let video in videos.data){

      const videoBody= $("<div>",{
       class:`videoDiv video-${videos.data[video].id.videoId}`,
       on:{click:()=>{
             openYoutubeModal(videos.data[video])}
                }   
            });
      const title=$("<div>",{
          class:"videoImageTitle",
          text:videos.data[video].snippet.title
      });
       const videoImage=$("<img>",{
         src:`${videos.data[video].snippet.thumbnails.medium.url}`,
         width:"100%",
         height:"100%"
       });
       videoBody.append(title);
       videoBody.append(videoImage);
       
       
      
    $(".youtubeVideos").append(videoBody);
  }
}

function openYoutubeModal(videoClicked){
    $(".youtubeModal").html("");
     console.log(videoClicked.id)
    
    let youtubeVideo=$("<iframe>",{
        width:"100%",
        height:"100%",
        src:`http://www.youtube.com/embed/${videoClicked.id.videoId}`,
        frameborder:"1"
    });
    $(".youtubeModal").append(youtubeVideo);
    
    $(".modal").removeClass("hide");


}

function closeYoutubeModal(){
    $(".modal").addClass("hide");
}