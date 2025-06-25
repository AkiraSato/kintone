(() => {
  "use strict";

  const e = window.eventHandle;

  kintone.events.on("app.record.detail.show", (event) => {
    const record = event.record;
    const rec = kintone.app.record;

    console.log(0);

    return event;
  });
})();
