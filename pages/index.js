import { useState, useEffect } from 'react';
import DataCards from '../components/DataCards';

import Tabletop from 'tabletop';

export default () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    Tabletop.init({
      key: '1I_q6e4v2Pk_i7yFhJIQ8C-1sxB2X9KqPfx8R1BA8gjg',
      callback: googleData => {
        setData(googleData);
      },
      simpleSheet: true,
    });
    setIsLoading(false);
  }, []);

  return (
    <div>
      <div className="p-4 bg-white rounded shadow max-w-md sm:max-w-xl md:max-w-4xl lg:max-w-6xl mx-auto px-8 lg:px-12 py-8">
        <h1 className="text-2xl font-bold">Stocks</h1>
        <p className="text-gray-500">
          Data stored with Google Sheets + Collected with Cheerio + NodeFetch
          Web scraping
        </p>
      </div>
      <div className="max-w-md sm:max-w-xl md:max-w-4xl lg:max-w-6xl mx-auto px-8 lg:px-12 py-8">
        <div className="border-b-2 border-white border-solid py-2 mb-12">
          <h2 className="text-xl text-gray-900">Latest Data</h2>
          <p className="text-white">
            A selection of my favourite Tech, Crypto & Mining Stocks!
          </p>
        </div>
        {/* <SearchBar onFormSubmit={onFormSubmit} /> */}

        <div className="flex flex-wrap -mx-4">
          {isLoading ? (
            <h1>Loading</h1>
          ) : (
            data.map((data, index) => (
              //error occurs here
              //console.log(video.snippet.title);
              //console.log(video.snippet.publishedAt);
              //console.log(video.snippet.description);

              <DataCards data={data} />
            ))
          )}
        </div>
      </div>
    </div>
  );
};
