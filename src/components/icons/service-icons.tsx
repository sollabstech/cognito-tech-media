import type { ComponentType, SVGProps } from "react";

type Props = SVGProps<SVGSVGElement>;

const wrap = (path: React.ReactNode): ComponentType<Props> =>
  function Icon(props: Props) {
    return (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
        {...props}
      >
        {path}
      </svg>
    );
  };

/** Website development — browser window + code caret. */
export const WebIcon = wrap(
  <>
    <rect x="3" y="4" width="18" height="16" rx="2.5" />
    <path d="M3 9h18" />
    <path d="M8 15l-2-2 2-2M13 11l2 2-2 2" />
  </>,
);

/** Digital marketing — rising bars + spark. */
export const MarketingIcon = wrap(
  <>
    <path d="M4 20h16" />
    <rect x="5" y="12" width="3.2" height="6" rx="1" />
    <rect x="10.4" y="8" width="3.2" height="10" rx="1" />
    <rect x="15.8" y="4.5" width="3.2" height="13.5" rx="1" />
    <path d="M4 9l4-3 3 2 6-5" />
  </>,
);

/** Video production — play badge + clapper. */
export const VideoIcon = wrap(
  <>
    <rect x="3" y="6" width="18" height="13" rx="2.5" />
    <path d="M3 10l3-4M9 10l3-4M15 10l3-4" />
    <path d="M10.5 12.5l4 2.2-4 2.2z" fill="currentColor" stroke="none" />
  </>,
);

export const serviceIcons: ComponentType<Props>[] = [WebIcon, MarketingIcon, VideoIcon];
