/* eslint-disable jsx-a11y/iframe-has-title */
import React from "react";

const IFrame = (props) => {
  return (
    <React.Fragment>
      <iframe height="490" width="100%" frameBorder="0" src={props.src} />
    </React.Fragment>
  );
};

export default IFrame;
