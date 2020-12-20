import Script from 'react-load-script'
import React from 'react';

const UseScripts = () => {
    return (
        <>
          <Script 
            url="https://ajax.googleapis.com/ajax/libs/jquery/3.1.0/jquery.min.js"
            attributes={{render: '', crossorigin: ''}}
          />          
          <Script 
            url="assets/js/jquery.min.js"
            attributes={{render: '', crossorigin: ''}}
          />
          <Script 
            url="assets/bootstrap/js/bootstrap.min.js"
            attributes={{render: '', crossorigin: ''}}
          />
          <Script 
            url="assets/js/baguetteBox.min.js"
            attributes={{render: '', crossorigin: ''}}
          />
          <Script 
            url="assets/js/smoothproducts.min.js"
            attributes={{render: '', crossorigin: ''}}
          />          
          <Script 
            url="assets/js/theme.js"
            attributes={{render: '', crossorigin: ''}}
          />
        </>
    )
}

export default UseScripts;

