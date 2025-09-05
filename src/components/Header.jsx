import React from 'react';

    function Header(props) { 
        const { title} = props;
        const { subtitle} = props;

        return(
            <div className='cabeçalho'> 
              <h1>{title}</h1>
              <h2>{subtitle}</h2>
            </div>
            )
          }

          export default Header;
