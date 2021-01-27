import React from "react";
import ReactPlayer from "react-player";

const Youtube = () => {
  return (
    <div className="youtube-col vertical-spacing">
      <div className="youtube-left">
        <div className="player-wrapper">
          <ReactPlayer
            className="react-player"
            url="https://youtu.be/y1HHzc_ml9Y"
            width="100%"
            height="100%"
          />
        </div>
      </div>
      <div className="youtube-right">
        <div className="youtube-right-video">
          <div className="player-wrapper">
            <ReactPlayer
              className="react-player"
              url="https://youtu.be/FMC081hStGY"
              width="100%"
              height="100%"
            />
          </div>
        </div>
        <div className="">
          <p>韓國尊貴護膚品牌 – 御容鑑 , 正式登陸莎莎！</p>
          <p>
            御容鑑嚴選珍貴韓藥，配合不同草本萃取，調配嶄新抗衰老護膚配方，利用先進的專利生產技術，調配出滋陰養潤的滋養煥顏系列，為肌膚提供極致年輕能量。
          </p>
          <a href="#">View More</a>
        </div>
      </div>
    </div>
  );
};

export default Youtube;
