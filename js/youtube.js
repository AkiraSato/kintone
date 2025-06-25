(() => {
  "use strict";
  const e = window.eventHandle;

  kintone.events.on(e.dtlShow, (event) => {
    const record = event.record;
    const rec = kintone.app.record;

    const space_01 = rec.getSpaceElement("youtube-field");
    const ytLink_01 = record["YouTubeリンク"].value;

    if (space_01 && ytLink_01) {
      const movie_01 = `
      <iframe width="560" height="315" src="${ytLink_01}"
      title="YouTube video player" frameborder="0"
      allow="accelerometer; autoplay; clipboard-write;
      encrypted-media; gyroscope; picture-in-picture;
      web-share" referrerpolicy="strict-origin-when-cross-origin"
      allowfullscreen>
      </iframe>
      `;
      space_01.innerHTML = movie_01;
    }

    return event;
  });
})();
