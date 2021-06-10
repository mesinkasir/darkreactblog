import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
const ArticleList = ({ articles }) => (
  <>
    <Helmet>
      <title>Axcora dev</title>
      <meta
        name="description"
        content="Pembuatan aplikasi website kasir toko, restoran cafe, sekolah , company profile akuntasi, Aplikasi android"
      />
      <meta content="Axcora dev" property="og:title" />
      <meta
        content="Pembuatan aplikasi website kasir toko, restoran cafe, sekolah , company profile akuntasi, Aplikasi android"
        property="og:description"
      />
      <meta
        content="https://1.bp.blogspot.com/-t2VnKnlI0l8/Xzt04NUjFAI/AAAAAAAALN8/TUprEcTdVlwmkL3a1sXnbtDcGHUv-3kxQCLcBGAsYHQ/s1200/aplikasi%2Btoko%2Bmesin%2Bkasir%2Bonline%2Blaravel%2Bpoint%2Bof%2Bsale%2Bcashier%2Bapps%2B%25283%2529.jpg"
        property="og:image"
      />
      <meta content="https://axcora.com/getaxcoracms" property="og:author" />
      <meta content="Axcora dev" name="facebook:title" />
      <meta content="website" property="og:type" />
      <meta
        content="https://www.facebook.com/mesinkasircomplete"
        property="facebook:author"
      />
      <meta
        content="https://1.bp.blogspot.com/-t2VnKnlI0l8/Xzt04NUjFAI/AAAAAAAALN8/TUprEcTdVlwmkL3a1sXnbtDcGHUv-3kxQCLcBGAsYHQ/s1200/aplikasi%2Btoko%2Bmesin%2Bkasir%2Bonline%2Blaravel%2Bpoint%2Bof%2Bsale%2Bcashier%2Bapps%2B%25283%2529.jpg"
        name="facebook:image"
      />
      <meta content="Axcora dev" property="og:site_name" />
      <meta
        content="Pembuatan aplikasi website kasir toko, restoran cafe, sekolah , company profile akuntasi, Aplikasi android"
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
        content="Pembuatan aplikasi website kasir toko, restoran cafe, sekolah , company profile akuntasi, Aplikasi android"
        name="twitter:description"
      />
      <meta content="Axcora dev" name="twitter:title" />
      <meta content="index, follow" name="robots" />
    </Helmet>
    <div className="container">
      <div className="row">
        {articles.map((article, key) => (
          <Link
            className="uk-animation-slide-top text-light"
            key={key}
            to={`/article/${article.name}`}
          >
            {' '}
            <h3 className="text-white">
              <strong>{article.title}</strong> -{' '}
              <small>
                <small>{article.desc}</small>
              </small>
            </h3>
          </Link>
        ))}
      </div>
    </div>
  </>
);

export default ArticleList;
