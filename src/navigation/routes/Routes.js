import React from "react";
import { Switch, Route } from "react-router-dom";
import MaineCoon from "../../container/MaineCoon";
import Ragdoll from "../../container/Ragdoll";
import Fold from "../../container/ScottishFold";
import Home from "../../container/Home";

function Routes() {
  return (
    <Switch>
      <Route exact path="/" children={<Home />} />
      <Route exact path="/mainecoon" children={<MaineCoon />} />
      <Route exact path="/ragdoll" children={<Ragdoll />} />
      <Route exact path="/scottishfold" children={<Fold />} />
    </Switch>
  );
}

export default Routes;
