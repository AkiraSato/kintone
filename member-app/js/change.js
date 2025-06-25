(() => {
  "use strict";

  const e = window.eventHandle;
  const fld = window.fields;

  const birthDate = fld.birthDate;

  const evBirthChg = [e.crtChg + birthDate, e.edtChg + birthDate];

  kintone.events.on(evBirthChg, function (event) {
    const record = event.record;
    // 年齢を計算
    const age = window.ageCalc(record);

    // 年齢を表示用フィールドに代入
    record[fld.age].value = String(age);

    return event;
  });
})();
