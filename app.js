const pdf_container = document.querySelector('#pdf-container');

const api_key = 'AIzaSyB4_WlnF3bA7A6F-re2rfKWaAP5GO1Qv4w';
const api_baseURL = 'https://www.googleapis.com/youtube/v3/videos?part=snippet';
const base_url = 'https://youtu.be';
let videos = [
    '0BYXxdLLg10', 'x4d1Yp9yAoY',
    '0RA7vL09WgU', 'Y4octFyg6K0',
    '0RA7vL09WgU', 'MCDF0cVLWks',
    'JPs042e1z9A', '_4FeJYMCO80',
    'zY1TO7KXuTw', '6snib5Zsobc',
    'rVBe9sGJLvI', '1psE-TS97xU'
  ];


videos.forEach(function(video_id){
   video_data = fetch(`${api_baseURL}&id=${video_id}&key=${api_key}`)
   .then(response => response.json()
   .then(data => {
        let video_title = data.items[0].snippet.title;
        let video_thumbnail = data.items[0].snippet.thumbnails.standard.url;

        let html = `
            <div class="video" id="${video_id}">
                <a href="${base_url}/${video_id}">
                    <img class="thumbnail" src="${video_thumbnail}" />
                </a><br>
                <p class="video_title">${video_title}</p>
                <a class="play-btn" target="_blank" href="${base_url}/${video_id}">▶ Play</a>
            </div>
        `;

        pdf_container.innerHTML += html;
   }))
});

