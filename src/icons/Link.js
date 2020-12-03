import * as React from "react";

function SvgLink(props) {
  return (
    <svg viewBox="0 0 24 24" {...props}>
      <path d="M4.879 9.92l-2.974 2.975a6.504 6.504 0 109.198 9.198l3.962-3.965A6.503 6.503 0 0013.27 7.662L12 8.932a2.17 2.17 0 00-.334.432 4.336 4.336 0 011.867 7.233l-3.96 3.963a4.338 4.338 0 01-6.136-6.135l1.72-1.716a8.71 8.71 0 01-.278-2.79v.002z" />
      <path d="M7.04 10.827l.362-.362a4.314 4.314 0 011.943-1.123A4.314 4.314 0 0110.467 7.4l.362-.362a6.512 6.512 0 00-3.164.622 6.49 6.49 0 00-.625 3.165v.002z" />
      <path d="M8.935 5.867a6.503 6.503 0 001.795 10.466l1.68-1.682a4.335 4.335 0 01-1.943-7.253l3.96-3.963a4.338 4.338 0 116.136 6.135l-1.72 1.717c.243.91.337 1.853.278 2.79l2.974-2.974a6.504 6.504 0 00-9.198-9.198L8.935 5.867z" />
      <path d="M16.335 16.333a6.482 6.482 0 00.625-3.165l-.362.362a4.315 4.315 0 01-1.942 1.123 4.314 4.314 0 01-1.123 1.942l-.362.362a6.512 6.512 0 003.165-.622v-.002z" />
    </svg>
  );
}

export default SvgLink;
