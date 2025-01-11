import React from 'react'

const Errors = ({error}) => {
  const DError = (event) =>{
      let div = event.target;
      let parent = div.parentNode;
      parent.removeChild(div);
  }
  return (
    <div>
      {error}
    </div>
  )
}

export default Errors
