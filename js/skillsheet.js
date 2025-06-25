(() => {
  "use strict";
  const fld = window.fields;

  // utils.js などに定義
  window.skillSheetPrint = function (record, rec) {
    const spaceElement = rec.getSpaceElement(fld.printSpace);
    if (!spaceElement) return;

    const name = record[fld.name]?.value || "";
    const kana = record[fld.kana]?.value || "";
    const sex = record[fld.sex]?.value || "";
    const birthDate = record[fld.birthDate]?.value || "";
    const nearestStation = record[fld.nearestStation]?.value || "";
    const trainLine = record[fld.trainLine]?.value || "";
    const qualifications = record[fld.qualifications]?.value || "";
    const remarks = record[fld.remarks]?.value || "";

    const subTable = fld.experience;
    const rows = record[subTable]?.value || [];

    const generateRows = () => {
      return rows
        .map((row, index) => {
          const rowNum = String(index + 1); // "01", "02", ...
          const term = row.value[fld.term]?.value || "";
          const duration = row.value[fld.projectDuration]?.value || "";
          const industry = row.value[fld.industry]?.value || "";
          const systemName = row.value[fld.systemName]?.value || "";
          const summary = row.value[fld.summary]?.value || "";
          const details = row.value[fld.details]?.value || "";
          const role = row.value[fld.role]?.value || "";
          const members = row.value[fld.members]?.value || "";
          const os = row.value[fld.os]?.value || "";
          const db = row.value[fld.db]?.value || "";
          const tools = row.value[fld.tools]?.value || "";
          const phases = row.value[fld.phases]?.value || "";
          // phasesのtd部分を動的生成
          const phasesTdHtml = window.phase
            .map((phaseName) => {
              // 選択されてたら"●"、なければ空文字
              const mark = phases.includes(phaseName) ? "●" : "";
              return `<td class="vertical assigned-process" rowspan="3">${mark}</td>`;
            })
            .join("");

          return `
        <tr>
          <td class="header small-width text-s" rowspan="3">${rowNum}</td>
          <td class="middle-width text-s">${term}<br/>(${duration})</td>
          <td class="large-width text-left text-s" rowspan="3">
          <div class="pj-area text-left">
          【作業概要】<br/>
          ${summary}<br/><br/>
          【作業内容】<br/>
          ${details}
          </div>
          </td>
          <td class="sm-md-width text-s">${role}</td>
            <td class="md-lg-width text-s">${os}</td>
            ${phasesTdHtml}
        </tr>
        <tr>
          <td class="text-left text-s">${industry}</td>
          <td class="text-s" rowspan="2">${members}名</td>
          <td class="text-s">${db}</td>
        </tr>
        <tr>
          <td class="text-left text-s">${systemName}</td>
          <td class="text-s">${tools}</td>
        </tr>
      `;
        })
        .join("");
    };

    spaceElement.innerHTML = `
        <div class="wrap-kintone-print">
        <div class="title">技術経歴書</div>
        <!-- 基本情報テーブル -->
        <table class="skillsheet-table">
            <tr>
                <th class="header middle-width">フリガナ</th>
                <td>${kana}</td>
                <th class="header middle-width">性&emsp;別</th>
                <td>${sex}</td>
            </tr>
            <tr>
                <th class="header">氏&emsp;名</th>
                <td>${name}</td>
                <th class="header">年&emsp;齢</th>
                <td></td>
            </tr>
            <tr>
            <th class="header">住&emsp;所</th>
            <td></td>
            <th class="header">最寄駅／路線</th>
            <td>${nearestStation}&nbsp;／&nbsp;${trainLine}</td>
            </tr>
            <tr>
            <th class="header">資&emsp;格</th>
            <td colspan="3" style="height: 40px">${qualifications}</td>
            </tr>
        </table>

        <!-- 備考テーブル -->
        <table class="skillsheet-table">
            <thead>
            <tr>
                <th class="header vertical small-width">備&emsp;考</th>
                <td style="height: 60px"></td>
            </tr>
            </thead>
        </table>

        <!-- 技術経歴テーブル -->
        <table class="skillsheet-table">
            <tr>
            <th class="header vertical small-width" rowspan="3">項&emsp;番</th>
            <th class="header md-lg-width">期&emsp;間</th>
            <th class="header large-width" rowspan="3">作業概要</th>
            <th class="header sm-md-width">役割</th>
            <th class="header md-lg-width">サーバ／OS</th>
            <th class="header" colspan="11">担当工程</th>
            </tr>
            <tr>
            <th class="header">業&emsp;種</th>
            <th class="header" rowspan="2">人数</th>
            <th class="header">DB</th>
            <th class="header vertical assigned-process" rowspan="2">要件定義</th>
            <th class="header vertical assigned-process" rowspan="2">基本設計</th>
            <th class="header vertical assigned-process" rowspan="2">詳細設計</th>
            <th class="header vertical assigned-process" rowspan="2">製造</th>
            <th class="header vertical assigned-process" rowspan="2">試験</th>
            <th class="header vertical assigned-process" rowspan="2">
                運用・保守
            </th>
            <th class="header vertical assigned-process" rowspan="2">
                構築・設定
            </th>
            <th class="header vertical assigned-process" rowspan="2">監視</th>
            <th class="header vertical assigned-process" rowspan="2">障害対応</th>
            <th class="header vertical assigned-process" rowspan="2">補助</th>
            <th class="header vertical assigned-process" rowspan="2">その他</th>
            </tr>
            <tr>
            <th class="header">システム名</th>
            <th class="header">言語・ツール<br />・Framework・その他</th>
            </tr>
            ${generateRows()}
        </table>
        </div>
  `;
  };
})();
