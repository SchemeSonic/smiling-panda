import React from 'react';
import _ from 'lodash';

import {Layout} from '../components/index';
import {safePrefix, htmlToReact} from '../utils';

export default class Page extends React.Component {
    componentDidMount() {
    const script = document.createElement("script");
    script.src = "https://js.hsforms.net/forms/shell.js";
    document.body.appendChild(script);

    script.addEventListener("load", () => {
      if (window.hbspt) {
        window.hbspt.forms.create({
          portalId: "7601211",
          formId: "6d500ba8-3e01-4909-becf-0ff691c6a69c",
          target: "#hubspotForm"
        });
      }
    });
  }
    render() {
        return (
            <Layout {...this.props}>
            <div className="outer">
              <div className="inner-medium">
                <article className="post post-full">
                  <header className="post-header">
                    <h1 className="post-title">{_.get(this.props, 'pageContext.frontmatter.title')}</h1>
                  </header>
                  {_.get(this.props, 'pageContext.frontmatter.img_path') && 
                  <div className="post-thumbnail">
                    <img src={safePrefix(_.get(this.props, 'pageContext.frontmatter.img_path'))} alt={_.get(this.props, 'pageContext.frontmatter.title')} />
                  </div>
                  }
                  {_.get(this.props, 'pageContext.frontmatter.subtitle') && 
                  <div className="post-subtitle">
                    {htmlToReact(_.get(this.props, 'pageContext.frontmatter.subtitle'))}
                  </div>
                  }
                  <div className="post-content">
                    {htmlToReact(_.get(this.props, 'pageContext.html'))}
                  </div>
                </article>
<div id="hubspotForm"></div>
<div>
              Talebiniz için sizinle en kısa sürede iletişime geçeceğiz.
            </div>
            <p></p>
            <div><i>
                Pintask hakkında daha detaylı bilgi almak ya
                da soru sormak isterseniz <b>info@pintask.app</b>
                 adresinden bizimle iletişime geçebilirsiniz.
              </i>
            </div>
              </div>
            </div>
            </Layout>
        );
    }
}
