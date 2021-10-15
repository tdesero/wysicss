import { useEffect } from "react";
import React, { useState } from "react";
import { createPortal } from "react-dom";

export function EditorIFrame({ children, title, ...props }) {
  const [contentRef, setContentRef] = useState(null);
  const mountNode = contentRef?.contentWindow?.document?.body;

  useEffect(() => {
    const doc = contentRef?.contentWindow?.document;
    if (doc) {
      doc.addEventListener("scroll", (e) => {
        props.onScroll(mountNode.scrollTop);
      });
    }
  }, [mountNode]);

  return (
    <iframe title={title} {...props} ref={setContentRef}>
      {mountNode && createPortal(children, mountNode)}
    </iframe>
  );
}
