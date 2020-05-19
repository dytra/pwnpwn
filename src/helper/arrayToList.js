import React from 'react';

export const arrayToList = (state,array,key) => {
  let count = state.terminal.commands.length;
  console.log('the count is ');
  console.log(count);
  return array.map((row,index)=> {
    return(<li key={`${key}-${count}-${index} `}> {row} </li>);
  });
};