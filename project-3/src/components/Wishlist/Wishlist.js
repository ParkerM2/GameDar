import React, { useState } from 'react';
import Wish from './WishItem';
import WishlistForm from './WishlistForm';

function Wishlist() {
  const [wishes, setWishes] = useState([]);


  // the code below gets ride of spaces in the search
  const addWish = wish => {
    if (!wish.text || /^\s*$/.test(wish.text)) {
      return;
    }

    const newWishes = [wish, ...wishes];

    setWishes(newWishes);
    console.log(...wishes);
  };
///////////////////
  const updateWish = (wishId, newValue) => {
    if (!newValue.text || /^\s*$/.test(newValue.text)) {
      return;
    }

    setWishes(prev => prev.map(item => (item.id === wishId ? newValue : item)));
  };

  const removeWish = id => {
    const removedArr = [...wishes].filter(wish => wish.id !== id);

    setWishes(removedArr);
  };

  const completeWish = id => {
    let updatedWishes = wishes.map(wish => {
      if (wish.id === id) {
        wish.isComplete = !wish.isComplete;
      }
      return wish;
    });
    setWishes(updatedWishes);
  };

  return (
    <>
      <h1>What's the Plan for Today?</h1>
      <WishlistForm onSubmit={addWish} />
      <Wish
        wishes={wishes}
        completeWish={completeWish}
        removeWish={removeWish}
        updateWish={updateWish}
      />
    </>
  );
}

export default Wishlist;