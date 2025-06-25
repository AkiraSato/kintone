(() => {
  "use strict";

  const e = window.eventHandle;
  const fld = window.fields;

  const birthDate = fld.birthDate;

  const evBirthChg = [e.crtChg + birthDate, e.edtChg + birthDate];

  kintone.events.on(evBirthChg, function (event) {
    const record = event.record;
    // 年齢を計算
    window.ageCalc(record);
    return event;
  });
})();
