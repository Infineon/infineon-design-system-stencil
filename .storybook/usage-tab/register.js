import React from "react";
import { addons, types } from "@storybook/addons";
import Usage from "./usage";

addons.register("usage-tab", () => {
  addons.add(`usage-tab/panel`, {
    type: types.TAB,
    title: "Usage",
    route: ({ storyId, refId, path }) => {
      const hideUsageTabStyles = document.getElementById(
        "hide-usage-tab"
      );
      if (path.includes("components-") && hideUsageTabStyles) {
        hideUsageTabStyles.remove();
      }

      if (!path.includes("components-") && !hideUsageTabStyles) {
        const style = document.createElement("link");
        style.id = "hide-usage-tab";
        style.rel = "stylesheet";
        style.href = "hide-usage-tab.css";
        document.body.appendChild(style);
      }

      return refId ? `/usage/${refId}_${storyId}` : `/usage/${storyId}`;
    },
    match: ({ viewMode }) => viewMode === "usage",
    render: props => <Usage {...props} />,
    paramKey: 'usage',

  });
});