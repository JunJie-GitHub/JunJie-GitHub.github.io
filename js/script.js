$(function() {

   //兼容新版的Chrome不能自动播放视频(静音)
   var video = document.getElementById('bgvid');
   video.play()
       .then(() => {
          // 播放成功啦
       }, () => {
          //播放失败
          video.muted = true; // 设置为静音然后再次播发
          video.play();
       })
});