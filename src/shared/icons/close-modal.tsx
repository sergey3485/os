import * as React from 'react';

const CloseModal = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg width={26} height={26} fill="none" {...props}>
      <path
        d="M8.625 17.375L13 13m0 0l4.375-4.375M13 13l4.375 4.375M13 13L8.625 8.625M24.875 13c0 6.558-5.317 11.875-11.875 11.875S1.125 19.558 1.125 13 6.442 1.125 13 1.125 24.875 6.442 24.875 13z"
        stroke="#000"
        strokeWidth={1.25}
        strokeLinecap="round"
      />
    </svg>
  );
};

const MemoCloseModal = React.memo(CloseModal);
export default MemoCloseModal;
