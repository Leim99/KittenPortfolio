$("body").on("map-ready", function () {
  map.addEventListener(EMap.Events.onFeatureMouseover, function (e) {
    parent.$("body").trigger("featureHover", { event: e, map });
  });
});
