(() => {
  "use strict";

  const e = window.eventHandle;

  kintone.events.on(e.dtlShow, (event) => {
    const record = event.record;
    const rec = kintone.app.record;

    window.YouTube(record, rec);

    return event;
  });

  kintone.events.on(e.prtShow, (event) => {
    const record = event.record;
    const rec = kintone.app.record;

    window.hideAllFields(record);
    window.skillSheetPrint(record, rec);

    return event;
  });
})();
