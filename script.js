//geeg o_-
document.addEventListener("DOMContentLoaded", () => {
    const voteBtns = document.querySelectorAll("#VoteBtn");
    const votelinkBtns = document.querySelectorAll("#VoteLinkBtn");
    const trailerVideo = document.getElementById("TrailerVideo");
    const youtubeLink = "https://www.youtube.com/watch?v=t_KzHB_RTz4";

    voteBtns.forEach((voteBtn) => {
        voteBtn.addEventListener("click", () => {
            window.location.href = "https://forms.gle/tcPo9pF5JRdyhEaR7";
        });
    });

    votelinkBtns.forEach((votelinkBtn) => {
        votelinkBtn.addEventListener("click", () => {
            window.location.href = "https://forms.gle/tcPo9pF5JRdyhEaR7";
        });
    });

    if (trailerVideo) {
        trailerVideo.addEventListener("click", () => {
            trailerVideo.innerHTML = `
                <div id="youtube-player"></div>
            `;

            const script = document.createElement("script");
            script.src = "https://www.youtube.com/iframe_api";
            document.head.appendChild(script);

            window.onYouTubeIframeAPIReady = function () {
                new YT.Player("youtube-player", {
                    videoId: "t_KzHB_RTz4",
                    playerVars: {
                        autoplay: 1
                    },
                    events: {
                        onError: function (event) {
                            window.location.href = youtubeLink;
                        }
                    }
                });
            };
        });
    }
});
// the end look away
