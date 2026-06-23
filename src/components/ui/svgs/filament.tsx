import type { SVGProps } from "react";

const Filament = (props: SVGProps<SVGSVGElement>) => (
  <svg {...props} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M12 2a6 6 0 0 0-6 6c0 3.31 2.69 6 6 6s6-2.69 6-6a6 6 0 0 0-6-6Zm0 12c-2.76 0-5-2.24-5-5 0-1.62.75-3.07 1.95-4.03L12 9.5l3.05-6.53A4.996 4.996 0 0 1 17 9c0 2.76-2.24 5-5 5Zm-.5 2v4h1v-4h-1Zm-2 4h5v1h-5v-1Z"
      fill="#7C3AED"
    />
  </svg>
);

export { Filament };
