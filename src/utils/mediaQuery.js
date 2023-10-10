const breakpoints = [320, 375, 480, 768, 1280];

const [smallMobile, mobile, movilePlus, tablet, desktop] = breakpoints.map(
  bp => `@media (min-width: ${bp}px)`
);

const mq = {
  smallMobile,
  mobile,
  movilePlus,
  tablet,
  desktop,
};

export default mq;
