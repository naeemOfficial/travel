import React from 'react';

const Basicinfo = () => {

    const countries = ['USA', 'Canada', 'Australia', 'Japan', 'Germany'];
    const languages = ['English', 'French', 'Spanish', 'Japanese', 'German'];
    const currencies = ['USD', 'CAD', 'AUD', 'JPY', 'EUR'];
    const areas = ['500,000 sq km', '300,000 sq km', '700,000 sq km', '150,000 sq km', '400,000 sq km'];
    const populations = ['50 million', '30 million', '25 million', '120 million', '80 million'];
    const timeZones = ['UTC-5', 'UTC-4', 'UTC+10', 'UTC+9', 'UTC+1'];
    const travelTimes = ['10 hours', '8 hours', '14 hours', '12 hours', '6 hours'];
  
    
    const randomIndex = () => Math.floor(Math.random() * 5);
  
    return (
      <div className="container mx-auto mt-8 p-4 bg-gray-200 rounded-md shadow-md">
        <h2 className="text-2xl font-semibold mb-4">Basic Information</h2>
        <div className="grid gap-4">
          <div>
            <strong>Country:</strong> {countries[randomIndex()]}
          </div>
          <div>
            <strong>Language:</strong> {languages[randomIndex()]}
          </div>
          <div>
            <strong>Currency:</strong> {currencies[randomIndex()]}
          </div>
          <div>
            <strong>Area:</strong> {areas[randomIndex()]}
          </div>
          <div>
            <strong>Population:</strong> {populations[randomIndex()]}
          </div>
          <div>
            <strong>Time Zone:</strong> {timeZones[randomIndex()]}
          </div>
          <div colSpan={2}>
            <strong>Time to Travel:</strong> {travelTimes[randomIndex()]}
          </div>
        </div>
      </div>
    );
  };

export default Basicinfo;