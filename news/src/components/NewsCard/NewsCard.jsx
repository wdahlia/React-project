import React from 'react';
import Button from '../Button/Button';

export default function NewsCard({ data }) {
  let { author, title, description, url, urlToImage, publishedAt } = data;
  title = title.split('-')[0];
  let time = new Date(publishedAt);
  time = `${time.getFullYear()}년 ${time.getMonth() + 1}월 ${time.getDate()}일`

  return (
    <div className='card rounded-xl'>
      { urlToImage ? <img src={urlToImage} alt={urlToImage} /> : <div className='nullImg'></div> }
      <div className='infoArea'>
        <h1>{title}</h1>
        <p>{time}</p>
        <h3>{author}</h3>
      </div>
      <div className='detailBtnArea'>
        <p>{description}</p>
        <Button detail><a href={url}>More Detail</a></Button>
      </div>
    </div>
  );
}

