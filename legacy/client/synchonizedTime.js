import * as timesync from "timesync"
export const ts = timesync.create({
    server: '/timesync',
    interval: 10000
  });
