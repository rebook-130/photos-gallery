import React from 'react';

function Header(props) {
  return (
    <div>
      {console.log('props in Header', props.headerItem.title)}

        <span>{ props.headerItem.title }</span><br />
        <span> { props.headerItem.ratings }</span>
        <span> ({ props.headerItem.number_of_reviews }) </span>
        <span> · { props.headerItem.address }</span>
    </div>
  )
}

export default Header;