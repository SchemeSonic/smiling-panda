import React from "react";
import _ from "lodash";

import { htmlToReact, Link, safePrefix } from "../utils";
import { trackCustomEvent } from "gatsby-plugin-google-analytics";

export default class SectionCta extends React.Component {
  render() {
    return (
      <section
        id={_.get(this.props, "section.section_id")}
        className="block cta-block bg-accent outer"
      >
        <div className="inner-large">
          <div className="grid">
            <div className="cell block-content">
              {_.get(this.props, "section.title") && (
                <h2 className="block-title">
                  {_.get(this.props, "section.title")}
                </h2>
              )}
              {_.get(this.props, "section.subtitle") && (
                <p className="block-subtitle">
                  {htmlToReact(_.get(this.props, "section.subtitle"))}
                </p>
              )}
            </div>
            {_.get(this.props, "section.actions") && (
              <div className="cell block-buttons">
                {_.map(
                  _.get(this.props, "section.actions"),
                  (action, action_idx) => (
                    <div
                      onClick={trackCustomEvent({
                        category: "Special Button",
                        action: "Click",
                        label: "Gatsby Plugin Example Campaign",
                        value: 43
                      })}
                    >
                      <Link
                        key={action_idx}
                        to={safePrefix(_.get(action, "url"))}
                        className="button white large"
                      >
                        {_.get(action, "label")}
                      </Link>
                    </div>
                  )
                )}
              </div>
            )}
          </div>
        </div>
      </section>
    );
  }
}
