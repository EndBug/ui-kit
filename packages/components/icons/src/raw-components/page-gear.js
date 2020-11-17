import * as React from 'react';

function PageGear(props) {
  return (
    <svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      {...props}
    >
      <defs>
        <path
          d="M12.553 4l-.062-.059h-.045l.062.059h.045zm3.824 6.086H11V4.941H5V19.06h4.779a.97.97 0 110 1.941h-5.53C3.567 21 3 20.467 3 19.794V4.206C3 3.533 3.566 3 4.25 3h9.032L18 7.441c.24.226.377.537.377.863v2.403a1 1 0 01-2 0v-.62zm-.914-2.328L13.06 5.494v2.264h2.404zm4.488 9.183l.976.742a.223.223 0 01.055.288l-.925 1.558c-.055.099-.176.139-.282.099l-1.152-.45c-.24.175-.5.328-.782.44l-.176 1.193a.224.224 0 01-.226.189h-1.85a.224.224 0 01-.228-.189l-.175-1.192a3.404 3.404 0 01-.782-.442l-1.152.45a.236.236 0 01-.282-.098l-.926-1.558a.223.223 0 01.056-.288l.976-.742v-.882l-.976-.743a.218.218 0 01-.056-.288l.926-1.556c.055-.1.176-.14.282-.1l1.152.45c.24-.175.5-.328.782-.44l.175-1.193a.224.224 0 01.227-.189h1.85c.116 0 .213.081.227.189l.176 1.193c.282.112.541.26.782.44l1.152-.45a.236.236 0 01.282.1l.925 1.556a.223.223 0 01-.055.288l-.976.743v.882zm-3.438 1.134c.893 0 1.62-.706 1.62-1.575 0-.868-.727-1.575-1.62-1.575-.892 0-1.619.707-1.619 1.575 0 .869.727 1.575 1.62 1.575z"
          id="page-gear__path-1"
        />
      </defs>
      <g
        id="page-gear__Artboard"
        stroke="none"
        strokeWidth={1}
        fill="none"
        fillRule="evenodd"
      >
        <g id="page-gear__Component-/-icon-/-24px-/-project-settings">
          <mask id="page-gear__mask-2" fill="#fff">
            <use xlinkHref="#page-gear__path-1" />
          </mask>
          <use
            id="page-gear__Mask"
            fill="#1A1A1A"
            xlinkHref="#page-gear__path-1"
          />
        </g>
      </g>
    </svg>
  );
}

export default PageGear;
