import React, { useState } from "react";
import style from "./Video.module.css";

const videoData = [
    {
        id: 1,
        title: "Introduction to Coaching",
        description: "Learn the basics of life coaching in this introductory video.",
        views: "12K",
        uploadDate: "2023-01-01",
        videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
    },
    {
        id: 2,
        title: "Advanced Coaching Techniques",
        description: "Explore advanced methods to enhance your coaching skills.",
        views: "8K",
        uploadDate: "2023-02-15",
        videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
    },
    {
        id: 3,
        title: "Mindset Coaching",
        description: "Understand how to coach your clients for a growth mindset.",
        views: "15K",
        uploadDate: "2023-03-10",
        videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
    },
];

const VideoPlayer = () => {
    const [selectedVideo, setSelectedVideo] = useState(videoData[0]);
    const [sidebarVisible, setSidebarVisible] = useState(true);

    const toggleSidebar = () => {
        setSidebarVisible(!sidebarVisible);
    };

    return (
        <div className={style.videoPlayer}>
            <div
                className={`${style.sidebar} ${sidebarVisible ? style.sidebarVisible : style.sidebarHidden
                    }`}
            >
                <button className={style.toggleButton} onClick={toggleSidebar}>
                    {sidebarVisible ? "Hide Sidebar" : "Show Sidebar"}
                </button>
                <ul className={style.videoList}>
                    {videoData.map((video) => (
                        <li
                            key={video.id}
                            className={`${style.videoItem} ${selectedVideo.id === video.id ? style.activeVideo : ""
                                }`}
                            onClick={() => setSelectedVideo(video)}
                        >
                            <h4>{video.title}</h4>
                        </li>
                    ))}
                </ul>
            </div>

            <div
                className={`${style.videoContainer} ${sidebarVisible ? style.videoContainerShrink : style.videoContainerExpand
                    }`}
            >
                <video
                    src={selectedVideo.videoUrl}
                    controls
                    className={style.videoPlayerFrame}
                ></video>
                <div className={style.videoDetails}>
                    <h3>{selectedVideo.title}</h3>
                    <p>{selectedVideo.description}</p>
                    <p>Views: {selectedVideo.views}</p>
                    <p>Uploaded on: {selectedVideo.uploadDate}</p>
                </div>
            </div>
        </div>
    );
};

export default VideoPlayer;