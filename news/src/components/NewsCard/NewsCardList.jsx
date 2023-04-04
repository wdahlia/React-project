import React from 'react';
import styles from './NewsCard.css';
import dataList from '../../mockCategoryData';
import NewsCard from './NewsCard';

export default function NewsCardList() {
  const { articles } = dataList;
  console.log(articles);
  return (
    <div className='flex flex-wrap gap-5 mt-20 w-full justify-center align-center'>
      { articles.map((article) => <NewsCard key={crypto.randomUUID()} data={article}/>)}
    </div>
  );
}

