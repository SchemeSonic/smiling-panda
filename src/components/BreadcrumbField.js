import React from "react";
import { Breadcrumb } from "gatsby-plugin-breadcrumb";

export default class BreadcrumbField extends React.Component {
  render() {
    return (
      <div>
        <Breadcrumb location="./Social.js" crumbLabel="About Us" />
      </div>
    );
  }
}
