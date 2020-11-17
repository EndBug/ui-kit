import * as React from 'react';

function Plugin(props) {
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
          d="M21.17 11.423a2.046 2.046 0 00-1.97-1.47 2.175 2.175 0 00-.911.206.43.43 0 01-.4-.047.394.394 0 01-.164-.324V4.956a.23.23 0 00-.206-.206H3.456a.223.223 0 00-.206.206v4.832c0 .096.049.185.13.236a.153.153 0 00.17 0 2.193 2.193 0 011.005-.23 2.21 2.21 0 010 4.421 2.352 2.352 0 01-.993-.229.276.276 0 00-.224.035.218.218 0 00-.088.183v4.832c.008.11.096.198.206.206h4.833c.07 0 .136-.036.176-.094a.259.259 0 00.035-.23 2.099 2.099 0 01-.23-.981 2.21 2.21 0 01.86-1.752 2.246 2.246 0 011.963-.4 2.222 2.222 0 011.605 2.134 2.352 2.352 0 01-.23.994.241.241 0 00.036.217c.04.059.106.094.176.095h4.839a.23.23 0 00.206-.206v-4.833a.435.435 0 01.223-.388.335.335 0 01.353 0c.279.14.587.211.9.206a2.058 2.058 0 001.969-2.599v.018z"
          id="plugin__path-1"
        />
        <path
          d="M21.17 11.423a2.046 2.046 0 00-1.97-1.47 2.175 2.175 0 00-.911.206.43.43 0 01-.4-.047.394.394 0 01-.164-.324V4.956a.23.23 0 00-.206-.206H3.456a.223.223 0 00-.206.206v4.832c0 .096.049.185.13.236a.153.153 0 00.17 0 2.193 2.193 0 011.005-.23 2.21 2.21 0 010 4.421 2.352 2.352 0 01-.993-.229.276.276 0 00-.224.035.218.218 0 00-.088.183v4.832c.008.11.096.198.206.206h4.833c.07 0 .136-.036.176-.094a.259.259 0 00.035-.23 2.099 2.099 0 01-.23-.981 2.21 2.21 0 01.86-1.752 2.246 2.246 0 011.963-.4 2.222 2.222 0 011.605 2.134 2.352 2.352 0 01-.23.994.241.241 0 00.036.217c.04.059.106.094.176.095h4.839a.23.23 0 00.206-.206v-4.833a.435.435 0 01.223-.388.335.335 0 01.353 0c.279.14.587.211.9.206a2.058 2.058 0 001.969-2.599v.018z"
          id="plugin__path-3"
        />
      </defs>
      <g
        id="plugin__Symbols"
        stroke="none"
        strokeWidth={1}
        fill="none"
        fillRule="evenodd"
      >
        <g id="plugin__plugin---Icon">
          <g id="plugin__Component-/-icon-/-24px-/-plugin">
            <mask id="plugin__mask-2" fill="#fff">
              <use xlinkHref="#plugin__path-1" />
            </mask>
            <use
              id="plugin__Mask"
              fill="#000"
              fillRule="nonzero"
              transform="rotate(-90 12.246 11.996)"
              xlinkHref="#plugin__path-1"
            />
          </g>
          <g id="plugin__Component-/-icon-/-24px-/-plugin">
            <mask id="plugin__mask-4" fill="#fff">
              <use xlinkHref="#plugin__path-3" />
            </mask>
            <use
              id="plugin__Mask"
              fill="#000"
              fillRule="nonzero"
              transform="rotate(-90 12.246 11.996)"
              xlinkHref="#plugin__path-3"
            />
          </g>
        </g>
      </g>
    </svg>
  );
}

export default Plugin;
