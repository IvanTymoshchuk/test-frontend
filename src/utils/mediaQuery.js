const breakpoints = [320, 375, 768, 1440];

const [smallMobile, mobile, tablet, desktop] = breakpoints.map(
  bp => `@media (max-width: ${bp}px)`,
);

const mq = {
  smallMobile,
  mobile,
  tablet,
  desktop,
};

export default mq;