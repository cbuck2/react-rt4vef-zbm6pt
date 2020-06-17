import React from "react";

export default function Reply(props) {
  return (
    <div className="k-bubble">
      <div dangerouslySetInnerHTML={props.htmlToinsert} />
    </div>
  )
}