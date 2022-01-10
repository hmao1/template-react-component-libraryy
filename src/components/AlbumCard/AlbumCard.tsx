import React from "react";
import "./AlbumCard.scss";

export interface AlbumCardProps {
  /** provide image source*/
  imgSrc: string;
  /** provide the album name*/
  albumName: string;
}

const AlbumCard = (props: AlbumCardProps) => {
  return (
    <div className="album-card">
      <img src={props.imgSrc} alt="album image" className="album-image"></img>
      <p className="album-name">{props.albumName}</p>
    </div>
  );
};

export default AlbumCard;
