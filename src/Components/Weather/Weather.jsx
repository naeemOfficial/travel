import React from 'react';

const Weather = () => {
  const months = ['Jan-Feb', 'Mar-Apr', 'May-Jun', 'Jul-Aug', 'Sep-Oct', 'Nov-Dec'];
  const temperatureRange = '10-69°F';

  return (
    <div className="container mx-auto justify-start mt-8 bg-[#f7f8fa] p-10">
      <table className="table-auto ">
        <thead>
          <tr>
            <th className="px-4 py-2 text-2xl text-start pb-5">Temperature Range</th>
          </tr>
        </thead>
        <tbody >
          {months.map((month, index) => (
            <tr key={index}>
              <td className="border-b px-4 py-2 text-lg">{month}</td>
              <td className="border-b px-4 py-2 text-lg">{temperatureRange}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Weather;
