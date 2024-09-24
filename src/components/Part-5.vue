<template>
   <div class="video-container mb-20">
    <iframe 
      src="https://www.youtube.com/embed/O56SqRoKR_4?autoplay=0" 
      title="YouTube video player" 
      frameborder="0" 
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
      allowfullscreen>
    </iframe>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
 * {
    height: 100%;
    margin: 0;
    display: flex;
    justify-content: center;
    align-items: center;
}

.video-container {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    max-width: 100%;
    margin-bottom: 50px; 
}

.video-container iframe {
    width: 950px; 
    height: 550px; 
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    max-width: 100%;
}


@media (max-width: 768px) {
    .video-container iframe {
        width: 90%; 
        height: auto; 
    }
}

@media (max-width: 412px) {
    .video-container iframe {
        width: 100%; 
        height: auto; 
    }
}
</style>