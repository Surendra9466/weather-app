import '../styles/display-data.css';

function DisplayData({ apiData, image }) {
    const temp = parseInt(apiData.main.temp - 273.15);

    return (
        <div className="weather-data" style={{ backgroundImage: `url(${image})` }}>
            <h2 className='title'>{apiData.name}</h2>
            <div className='weather-detail'>
                <div className='temp'>
                    <p>{temp} °</p>
                    <p>Sunny</p>
                </div>
                <div className='humidity'>
                    <p>humidity</p>
                    <p className='info'>{apiData.main.humidity}%</p>
                </div>
                <div className='wind'>
                    <p>Wind</p>
                    <p className='info'>{apiData.wind.speed} km/h</p>
                </div>
            </div>
        </div>
    )
}

export default DisplayData;