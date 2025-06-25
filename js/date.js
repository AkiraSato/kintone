(() => {
  "use strict";

  const e = window.eventHandle;
  const fld = window.fields;

  const experience = fld.experience; // サブテーブルのフィールドコード
  const start = fld.startDate; // 開始日
  const end = fld.endDate; // 完了日
  const period = fld.projectDuration; // 期間（書き込み先）
  const birthDate = fld.birthDate;
  const age = fld.age;

  const evChg = [
    e.crtChg + start,
    e.crtChg + end,
    e.edtChg + start,
    e.edtChg + end,
  ];

  kintone.events.on(evChg, (event) => {
    const record = event.record;

    if (!record[experience] || !Array.isArray(record[experience].value)) {
      return event;
    }

    record[experience].value.forEach((row) => {
      const rowVal = row.value;
      const startStr = rowVal[start].value;
      const endStr = rowVal[end].value;

      if (!startStr || !endStr) {
        rowVal[period].value = "";
        return;
      }

      const startDate = new Date(startStr);
      const endDate = new Date(endStr);

      if (endDate < startDate) {
        rowVal[period].value = "";
        return;
      }

      let y = endDate.getFullYear() - startDate.getFullYear();
      let m = endDate.getMonth() - startDate.getMonth();

      if (m < 0) {
        y--;
        m += 12;
      }

      rowVal[period].value =
        (y > 0 ? `${y}年` : "") + (m > 0 ? `${m}ヶ月` : "") || "0ヶ月";
    });

    return event;
  });
})();
