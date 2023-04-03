import React from 'react';
import Button from '../Button/Button';

export default function Categories() {
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
    <div className='mx-5 category flex gap-x-2 mt-10'>
      { categories.map((category, idx) => <Button key={idx} value={category}/>) }
    </div>
  );
}

