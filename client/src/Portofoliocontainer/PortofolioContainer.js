import React from "react";
import { TOTAL_SCREENS } from "../Utilities/commonUtils";

export default function PortofolioContainer() {
  const mapAllScreens = () => {
    return TOTAL_SCREENS.map((screen) =>
      screen.component ? (
        <screen.component
          screenName={screen.screen_name}
          key={screen.screen_name}
          id={screen.screen_name}
        />
      ) : (
        <div key={screen.screen_name}></div>
      )
    );
  };

  return <div className="portofolio-container">{mapAllScreens()}</div>;
}
