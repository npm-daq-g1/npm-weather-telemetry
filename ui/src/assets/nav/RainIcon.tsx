import React from 'react';

const RainIcon: React.FC = () => {
  const isDarkMode = localStorage.getItem('colorMode')
    ? localStorage.getItem('colorMode') === 'dark'
    : true;
  return (
    <svg
      width="35"
      height="35"
      viewBox="0 0 35 35"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0 13.75C0 19.2034 3.06173 23.9153 7.5 26.1383V23.2503C4.51274 21.269 2.5 17.7864 2.5 13.75C2.5 7.45057 7.40224 2.5 13.2604 2.5C18.2298 2.5 22.5114 6.06255 23.6961 10.9889L23.6998 10.9874C23.8671 11.6709 23.9738 12.3796 24.0135 13.1068C24.7924 12.7165 25.659 12.5 26.5616 12.5C29.7566 12.5 32.5 15.212 32.5 18.75C32.5 20.8881 31.4981 22.7246 30 23.8431V26.743C32.9466 25.378 35 22.3127 35 18.75C35 13.9175 31.222 10 26.5616 10C26.3818 10 26.2033 10.0058 26.0263 10.0173C24.4576 4.2372 19.3362 0 13.2604 0C5.93686 0 0 6.15608 0 13.75ZM20.8987 22.7532C21.1608 22.9046 21.5714 22.8385 21.7814 22.4748C21.8963 22.2755 22.0441 21.8618 22.1512 21.1881C22.1939 20.9196 22.226 20.6363 22.2493 20.3455C21.5193 20.862 20.9661 21.3855 20.6985 21.8493C20.4885 22.2131 20.6366 22.6018 20.8987 22.7532ZM22.243 17.4021C23.5459 16.6722 24.649 16.2552 24.649 16.2552C24.649 16.2552 24.7933 17.429 24.799 18.908C24.8051 20.5282 24.6449 22.5145 23.9462 23.7251C23.0676 25.2474 21.1437 25.7817 19.649 24.9185C18.1544 24.0552 17.655 22.1213 18.5336 20.599C19.3003 19.2705 20.8808 18.1653 22.243 17.4021ZM12.6451 24.0254C12.9073 24.1767 13.3179 24.1107 13.5278 23.7469C13.6428 23.5477 13.7906 23.1339 13.8976 22.4603C13.9403 22.1917 13.9725 21.9085 13.9958 21.6176C13.2657 22.1342 12.7126 22.6577 12.4449 23.1214C12.2349 23.4852 12.383 23.874 12.6451 24.0254ZM13.9894 18.6743C15.2924 17.9443 16.3955 17.5273 16.3955 17.5273C16.3955 17.5273 16.5398 18.7011 16.5454 20.1801C16.5516 21.8003 16.3914 23.7867 15.6927 24.9972C14.8141 26.5196 12.8901 27.0539 11.3955 26.1906C9.90082 25.3274 9.40141 23.3934 10.28 21.8711C11.0467 20.5427 12.6273 19.4374 13.9894 18.6743ZM24.5991 30.141C24.3892 30.5048 23.9786 30.5709 23.7165 30.4195C23.4544 30.2681 23.3063 29.8794 23.5162 29.5156C23.7839 29.0518 24.337 28.5283 25.0671 28.0118C25.0438 28.3026 25.0116 28.5859 24.969 28.8544C24.8619 29.5281 24.7141 29.9418 24.5991 30.141ZM27.4668 23.9215C27.4668 23.9215 26.3637 24.3384 25.0608 25.0684C23.6986 25.8316 22.1181 26.9368 21.3513 28.2653C20.4727 29.7876 20.9721 31.7215 22.4668 32.5848C23.9615 33.448 25.8854 32.9137 26.764 31.3914C27.4627 30.1808 27.6229 28.1945 27.6167 26.5743C27.6111 25.0953 27.4668 23.9215 27.4668 23.9215ZM15.3186 32.4219C15.5807 32.5733 15.9913 32.5072 16.2012 32.1434C16.3162 31.9442 16.464 31.5304 16.571 30.8568C16.6137 30.5882 16.6459 30.305 16.6692 30.0141C15.9391 30.5307 15.386 31.0542 15.1183 31.518C14.9084 31.8817 15.0564 32.2705 15.3186 32.4219ZM16.6629 27.0708C17.9658 26.3408 19.0689 25.9238 19.0689 25.9238C19.0689 25.9238 19.2132 27.0976 19.2188 28.5766C19.225 30.1968 19.0648 32.1832 18.3661 33.3937C17.4875 34.9161 15.5636 35.4504 14.0689 34.5871C12.5742 33.7239 12.0748 31.79 12.9534 30.2676C13.7202 28.9392 15.3007 27.8339 16.6629 27.0708Z"
        fill={!isDarkMode ? 'black' : 'white'}
      />
    </svg>
  );
};

export default RainIcon;
