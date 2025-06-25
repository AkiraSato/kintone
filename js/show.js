(() => {
  "use strict";

  const e = window.eventHandle;

  kintone.events.on(e.dtlShow, (event) => {
    const record = event.record;
    const rec = kintone.app.record;

    window.skillSheetPrint(record, rec);

    return event;
  });
})();
