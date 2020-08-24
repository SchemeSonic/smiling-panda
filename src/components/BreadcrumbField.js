import React from "react";
import { Breadcrumb } from "gatsby-plugin-breadcrumb";

export default class BreadcrumbField extends React.Component {
  render() {
    return (
      <div>
        <Breadcrumb crumbLabel="About Us" />
      </div>
    );
  }
}
