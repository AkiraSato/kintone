(() => {
  "use strict";

  const e = window.eventHandle;
  const fld = window.fields;

  const start = fld.startDate;
  const end = fld.endDate;

  console.log(start);

  const evChg = [
    e.crtChg + start,
    e.crtChg + end,
    e.edtChg + start,
    e.edtChg + end,
  ];

  kintone.events.on(evChg, function (event) {
    const record = event.record;

    window.durationCalc(record, start, end);

    return event;
  });
})();
