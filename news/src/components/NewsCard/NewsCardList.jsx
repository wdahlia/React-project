import React, { useState } from 'react';
import './NewsCard.css';
import NewsCard from './NewsCard';
import Button from '../Button/Button';
import axios from 'axios';
import { useQuery } from '@tanstack/react-query';

export default function NewsCardList() {
  const [tab, setTab] = useState('general');
  const API_KEY = process.env.REACT_APP_NEWS_KEY
  // axios 인스턴스 만들기

  const handleClick = (e) => {
    setTab(e.target.innerText);
  }

  const instance = axios.create({
    baseURL : 'https://newsapi.org/v2/top-headlines?/',
    params : {
      country : 'us',
      category : tab,
      pageSize : 40,
      apiKey : API_KEY,
    }
  })

  let { isLoading, isError, data } = useQuery({
    queryKey: ['category', tab],
    queryFn: () => instance.get().then((res) => {
      return res.data.articles
    }),
    retry : 2,
    staleTime : 1000 * 60 * 100,
  });

        
  const categories = [
    'general',
    'business',
    'technology',
    'science',
    'entertainment',
    'health', 
    'sports'
  ]

  return (
    <>
      <div className='mx-5 category flex flex-wrap justify-center gap-x-5 gap-y-5 mt-10'>
        { categories.map((category, idx) => {
            if (category === tab) {
              return <Button key={idx} onClick={handleClick} disabled>{category}</Button> 
            } else {
              return <Button key={idx} onClick={handleClick}>{category}</Button> 
            }
          }
        )}
      </div>
      { isLoading ?
        <div className='loading'>🥱 Loading...</div>
        : isError ? <div className='error'>☠️ Error Message</div> :
        <div className='flex flex-wrap gap-x-20 gap-y-10 mt-20 w-full justify-center align-center'>
          { data.map((article) => <NewsCard key={crypto.randomUUID()} data={article}/>) }
        </div>
      }
    </>
  );
}

