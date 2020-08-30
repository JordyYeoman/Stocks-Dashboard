const DataCards = props => {
  return (
    <div className="mt-12 md:mt-6 w-full sm:w-full md:w-1/2 lg:w-1/2 xl:w-1/3">
      <a href="#" target="_blank" rel="noopener noreferrer">
        <div className="px-2">
          <div className="relative pb-3/72">
            <img
              className="absolute top-0 h-full w-full object-contain rounded-lg shadow-md"
              src
              alt
            />
          </div>
          <div className="relative px-4 -mt-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="flex py-1">
                <img
                  className="h-6 w-12 object-contain rounded-lg"
                  src="./assets/logos/apple.png"
                  alt="Apple Computers Company Logo"
                />
                <h4 className="mt-1 font-semibold text-lg leading-tight truncate">
                  APPLE: {props.data.AAPL}
                </h4>
              </div>

              <div className="flex py-1">
                <img
                  className="h-8 w-12 object-contain rounded-lg"
                  src="./assets/logos/tesla.png"
                  alt="Tesla Motors Company Logo"
                />
                <h4 className="mt-1 font-semibold text-lg leading-tight truncate">
                  Tesla: {props.data.TSLA}
                </h4>
              </div>

              <div className="flex py-1">
                <img
                  className="h-8 w-12 object-contain rounded-lg"
                  src="./assets/logos/fmg.png"
                  alt="Fortescue Metals Group Logo"
                />
                <h4 className="mt-1 font-semibold text-lg leading-tight truncate">
                  FMG: {props.data.FMG}
                </h4>
              </div>

              <div className="flex py-1">
                <img
                  className="h-8 w-12 object-cover rounded-lg"
                  src="./assets/logos/btcusd.png"
                  alt="Bitcoin USD Logo"
                />

                <h4 className="mt-1 font-semibold text-lg leading-tight truncate">
                  BTC/USD: {props.data.BTCUSD}
                </h4>
              </div>

              <div>
                <span className="text-gray-600 text-sm flex justify-center -ml-12 pt-2">
                  Date: {props.data.date}
                </span>
              </div>
              <div className="mt-2 flex items-center">
                {/* // Render out 5 stars and fill stars depending on rating. Eg - rating: 4 */}
                {}
                <span className="text-gray-600 text-sm ml-2">{}</span>
              </div>
            </div>
          </div>
        </div>
      </a>
    </div>
  );
};

export default DataCards;
