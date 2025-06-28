(() => {
  "use strict";

  const e = window.eventHandle;
  const fld = window.fields;

  const events1 = [e.crtShow, e.edtShow];

  kintone.events.on(events1, (event) => {
    const record = event.record;
    const rec = kintone.app.record;
    window.convertFields(record, rec);
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
