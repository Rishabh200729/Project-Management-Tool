import React, { useState } from 'react'
import msgStyles from "../styles/Message.module.css";

const Message = ({ msgType, msg}) => {
  const isError =( msgType === "error" )
  return (
    <div className={ msgType === "success" ? msgStyles.success : msgStyles.error }>
      {msg}
    </div>  
  )
}

export default Message