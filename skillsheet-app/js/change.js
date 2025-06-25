(() => {
  "use strict";

  const e = window.eventHandle;
  const evChg = [
    e.crtChg + start,
    e.crtChg + end,
    e.edtChg + start,
    e.edtChg + end,
  ];

  kintone.events.on(evChg, function (event) {
    const record = event.record;

    window.durationCalc(record);

    return event;
  });
})();
