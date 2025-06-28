(() => {
  "use strict";

  const e = window.eventHandle;
  const fld = window.fields;

  const ex = fld.experience;
  const start = fld.startDate;
  const end = fld.endDate;

  const evChg = [
    e.crtChg + start,
    e.crtChg + end,
    e.edtChg + start,
    e.edtChg + end,
  ];

  const evChg2 = [e.crtChg + ex, e.edtChg + ex];

  kintone.events.on(evChg, function (event) {
    const record = event.record;

    window.durationCalc(record, start, end);

    return event;
  });

  kintone.events.on(evChg2, function (event) {
    const record = event.record;
    const rec = kintone.app.record;

    window.convertFields(record, rec);

    return event;
  });
})();
