import React from "react";
import avatar from "../public/assets/img/avatar.png";
import Image from "next/image";

const PersonData = () => {
  return (
    <div className="endData">
      <a href="#">
        <div className="premium">
          <svg
            width="21"
            height="20"
            viewBox="0 0 21 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g filter="url(#filter0_i)">
              <path
                d="M20.2985 7.65952C20.1675 7.25454 19.8083 6.9669 19.3834 6.9286L13.6108 6.40445L11.3282 1.06175C11.1599 0.670203 10.7766 0.416748 10.3507 0.416748C9.9248 0.416748 9.54149 0.670203 9.37318 1.06267L7.09056 6.40445L1.3171 6.9286C0.892895 6.96782 0.534609 7.25454 0.402922 7.65952C0.271236 8.0645 0.392851 8.50869 0.713752 8.7887L5.07711 12.6154L3.79046 18.2831C3.69631 18.6998 3.85806 19.1306 4.20383 19.3806C4.38969 19.5148 4.60713 19.5832 4.82641 19.5832C5.01547 19.5832 5.203 19.5322 5.37131 19.4315L10.3507 16.4555L15.3282 19.4315C15.6925 19.6506 16.1516 19.6306 16.4966 19.3806C16.8426 19.1298 17.0041 18.6989 16.91 18.2831L15.6233 12.6154L19.9867 8.78946C20.3076 8.50869 20.4301 8.06526 20.2985 7.65952Z"
                fill="white"
              />
            </g>
            <defs>
              <filter
                id="filter0_i"
                x="0.350586"
                y="0.416748"
                width="20"
                height="21.2029"
                filterUnits="userSpaceOnUse"
                colorInterpolationFilters="sRGB"
              >
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="BackgroundImageFix"
                  result="shape"
                />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                />
                <feOffset dy="2.03648" />
                <feGaussianBlur stdDeviation="1.35765" />
                <feComposite
                  in2="hardAlpha"
                  operator="arithmetic"
                  k2="-1"
                  k3="1"
                />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"
                />
                <feBlend
                  mode="normal"
                  in2="shape"
                  result="effect1_innerShadow"
                />
              </filter>
            </defs>
          </svg>
          <span>Go Premium</span>
        </div>
      </a>
      <div className="level"></div>
      <div className="avatar">
        <a href="#">
          <Image src={avatar} alt="avatar" />
        </a>
      </div>
    </div>
  );
};

export default PersonData;
