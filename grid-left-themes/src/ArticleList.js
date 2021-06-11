import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
const ArticleList = ({ articles }) => (
  <>
    <Helmet>
      <title>Dark React</title>
      <meta
        name="description"
        content="Open source code free download react website themes template"
      />
      <meta content="Dark React" property="og:title" />
      <meta
        content="Open source code free download react website themes template"
        property="og:description"
      />
      <meta
        content="https://1.bp.blogspot.com/-t2VnKnlI0l8/Xzt04NUjFAI/AAAAAAAALN8/TUprEcTdVlwmkL3a1sXnbtDcGHUv-3kxQCLcBGAsYHQ/s1200/aplikasi%2Btoko%2Bmesin%2Bkasir%2Bonline%2Blaravel%2Bpoint%2Bof%2Bsale%2Bcashier%2Bapps%2B%25283%2529.jpg"
        property="og:image"
      />
      <meta content="https://axcora.com/getaxcoracms" property="og:author" />
      <meta content="Dark React" name="facebook:title" />
      <meta content="website" property="og:type" />
      <meta
        content="https://www.facebook.com/mesinkasircomplete"
        property="facebook:author"
      />
      <meta
        content="https://1.bp.blogspot.com/-t2VnKnlI0l8/Xzt04NUjFAI/AAAAAAAALN8/TUprEcTdVlwmkL3a1sXnbtDcGHUv-3kxQCLcBGAsYHQ/s1200/aplikasi%2Btoko%2Bmesin%2Bkasir%2Bonline%2Blaravel%2Bpoint%2Bof%2Bsale%2Bcashier%2Bapps%2B%25283%2529.jpg"
        name="facebook:image"
      />
      <meta content="Dark React" property="og:site_name" />
      <meta
        content="Open source code free download react website themes template"
        property="facebook:description"
      />
      <meta content="summary_large_image" name="twitter:card" />
      <meta
        content="https://twitter.com/hockeycomp"
        property="twitter:author"
      />
      <meta content="@hockeycomp" name="twitter:site" />
      <meta
        content="https://1.bp.blogspot.com/-t2VnKnlI0l8/Xzt04NUjFAI/AAAAAAAALN8/TUprEcTdVlwmkL3a1sXnbtDcGHUv-3kxQCLcBGAsYHQ/s1200/aplikasi%2Btoko%2Bmesin%2Bkasir%2Bonline%2Blaravel%2Bpoint%2Bof%2Bsale%2Bcashier%2Bapps%2B%25283%2529.jpg"
        name="twitter:image"
      />
      <meta
        content="Open source code free download react website themes template"
        name="twitter:description"
      />
      <meta content="Dark React" name="twitter:title" />
      <meta content="index, follow" name="robots" />
    </Helmet>
    <div className="container">
      <div className="row">
        {articles.map((article, key) => (
          <Link
            className="btn btn-outline-danger col-md-12 border border-dark rounded uk-animation-slide-top"
            key={key}
            to={`/article/${article.name}`}
          >
            {' '}
            <div className="row">
              <div class="col-md-4 p-3 p-md-5 bg-primary">
                <img className="img-fluid" src={article.img} />
              </div>
              <div class="col-md-8 p-3 p-md-5 text-start bg-light">
                {' '}
                <h1>
                  <strong>{article.title}</strong>
                </h1>
                <p>{article.desc}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  </>
);

export default ArticleList;
