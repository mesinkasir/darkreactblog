import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
const ArticleList = ({ articles }) => (
  <>
    <Helmet>
      <title>Aplikasi penjualan kasir toko grosir dan eceran</title>
      <meta
        name="description"
        content="Axcora tehcnology dev aplikasi kasir toko restoran dan pembuatan website terintegrasi"
      />
      <meta
        content="Pembuatan Aplikasi dan website kasir toko resto"
        property="og:title"
      />
      <meta
        content="Axcora tehcnology dev aplikasi kasir toko restoran dan pembuatan website terintegrasi"
        property="og:description"
      />
      <meta
        content="https://1.bp.blogspot.com/-t2VnKnlI0l8/Xzt04NUjFAI/AAAAAAAALN8/TUprEcTdVlwmkL3a1sXnbtDcGHUv-3kxQCLcBGAsYHQ/s1200/aplikasi%2Btoko%2Bmesin%2Bkasir%2Bonline%2Blaravel%2Bpoint%2Bof%2Bsale%2Bcashier%2Bapps%2B%25283%2529.jpg"
        property="og:image"
      />
      <meta content="https://axcora.com/getaxcoracms" property="og:author" />
      <meta
        content="Pembuatan Aplikasi dan website kasir toko resto"
        name="facebook:title"
      />
      <meta content="website" property="og:type" />
      <meta
        content="https://www.facebook.com/mesinkasircomplete"
        property="facebook:author"
      />
      <meta
        content="https://1.bp.blogspot.com/-t2VnKnlI0l8/Xzt04NUjFAI/AAAAAAAALN8/TUprEcTdVlwmkL3a1sXnbtDcGHUv-3kxQCLcBGAsYHQ/s1200/aplikasi%2Btoko%2Bmesin%2Bkasir%2Bonline%2Blaravel%2Bpoint%2Bof%2Bsale%2Bcashier%2Bapps%2B%25283%2529.jpg"
        name="facebook:image"
      />
      <meta
        content="Pembuatan Aplikasi dan website kasir toko resto"
        property="og:site_name"
      />
      <meta
        content="Axcora tehcnology dev aplikasi kasir toko restoran dan pembuatan website terintegrasi"
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
        content="Axcora tehcnology dev aplikasi kasir toko restoran dan pembuatan website terintegrasi"
        name="twitter:description"
      />
      <meta
        content="Pembuatan Aplikasi dan website kasir toko resto"
        name="twitter:title"
      />
      <meta content="index, follow" name="robots" />
    </Helmet>
    {articles.map((article, key) => (
      <Link
        className="btn btn-outline-primary rounded border border-dark p-3 col-12 col-md-4 uk-animation-slide-top"
        key={key}
        to={`/article/${article.name}`}
      >
        <img className="img-fluid rounded" src={article.img} />
        <h3 className="text-light">
          <strong>{article.title}</strong>
        </h3>
        <p className="text-light">{article.desc}</p>
      </Link>
    ))}
  </>
);

export default ArticleList;
