import React, { Component } from "react";

import Layout from "./components/LayoutFolder/Layout";
import BurgerBuilder from "./containers/BurgerBuilderFolder/BurgerBuilder";

class App extends Component {
  render() {
    return (
      <div>
        <Layout>
          <BurgerBuilder />
        </Layout>
      </div>
    );
  }
}

export default App;
