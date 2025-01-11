import { Store } from "@/state/store.js";
import { Provider } from "react-redux";

import React from 'react'

const ParentComponent = ({children}) => {
  return <>
      <Provider store={Store}>
      <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com"/>
        <link href="https://fonts.googleapis.com/css2?family=McLaren&display=swap" rel="stylesheet" />
        <title>Notebook</title>
      </head>
      <body>{children}</body>
      </html>
    </Provider></>
}

export default ParentComponent;