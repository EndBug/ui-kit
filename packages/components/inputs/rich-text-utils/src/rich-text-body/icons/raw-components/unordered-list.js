import * as React from 'react';

function UnorderedList(props) {
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
          d="M5.625 17a.36.36 0 01.264.111c.055.056.09.12.104.19l.007.074v2.25a.36.36 0 01-.111.264.363.363 0 01-.19.104L5.625 20h-2.25a.36.36 0 01-.264-.111.364.364 0 01-.104-.19L3 19.625v-2.25a.36.36 0 01.111-.264.366.366 0 01.19-.104L3.375 17h2.25zm15.125 1a.39.39 0 01.176.037.145.145 0 01.066.056l.008.032v.75c0 .034-.025.063-.074.088a.35.35 0 01-.111.033L20.75 19h-10.5a.389.389 0 01-.176-.037.144.144 0 01-.066-.056L10 18.875v-.75c0-.034.025-.063.074-.088a.352.352 0 01.111-.033L10.25 18h10.5zM5.625 10a.36.36 0 01.264.111c.055.056.09.12.104.19l.007.074v2.25a.36.36 0 01-.111.264.365.365 0 01-.19.104L5.625 13h-2.25a.361.361 0 01-.264-.111.364.364 0 01-.104-.19L3 12.625v-2.25a.36.36 0 01.111-.264.364.364 0 01.19-.104L3.375 10h2.25zm15.125 1a.39.39 0 01.176.037c.05.025.074.054.074.088v.75c0 .034-.025.063-.074.088a.39.39 0 01-.176.037h-10.5a.39.39 0 01-.176-.037c-.05-.025-.074-.054-.074-.088v-.75c0-.034.025-.063.074-.088A.389.389 0 0110.25 11zM5.625 4c.102 0 .19.037.264.111.055.056.09.12.104.19L6 4.375v2.25a.36.36 0 01-.111.264.363.363 0 01-.19.104L5.625 7h-2.25a.36.36 0 01-.264-.111.364.364 0 01-.104-.19L3 6.625v-2.25a.36.36 0 01.111-.264.364.364 0 01.19-.104L3.375 4h2.25zm4.625 1h10.5a.39.39 0 01.176.037.145.145 0 01.066.056l.008.032v.75c0 .034-.025.063-.074.088a.35.35 0 01-.111.033L20.75 6h-10.5a.388.388 0 01-.176-.037.145.145 0 01-.066-.056L10 5.875v-.75c0-.034.025-.063.074-.088a.35.35 0 01.111-.033L10.25 5h10.5z"
          id="unordered-list__path-1"
        />
      </defs>
      <g
        id="unordered-list__Component-/-icon-/-24px-/-Richtext-/-Bullet-list"
        stroke="none"
        strokeWidth={1}
        fill="none"
        fillRule="evenodd"
      >
        <g id="unordered-list__Component-/-icon-/-16px-/-Richtext-/-Bullet-list">
          <mask id="unordered-list__mask-2" fill="#fff">
            <use xlinkHref="#unordered-list__path-1" />
          </mask>
          <use
            id="unordered-list__shape"
            fill="#1A1A1A"
            xlinkHref="#unordered-list__path-1"
          />
        </g>
      </g>
    </svg>
  );
}

export default UnorderedList;
