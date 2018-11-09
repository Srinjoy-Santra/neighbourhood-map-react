//error handler
function handleErrors(response) {
    if (!response.ok) {
        throw Error(response.statusText);
    }
    return response;
}
//const lati=22.471043;
//const long=88.392445;
const pos = {lat:22.550944,lng:88.354012};//{ lat: 51.49, lng: -0.005 };
const client_id = 'WCRD2LEP1JGBX2SBVY00SPDZLPJZ33JWGMAPOIFOUPF5RKIN';
const client_secret = 'AVY54ND01KIF0FMVLD31KQXLPWQ3A41JAAT0Y1VCQ45ADVT4';
//gets a response from Foursquare with restaurants around Bhubaneswar (20.352400, 85.819334)
export const getAllPlaces = () =>
  fetch(`https://api.foursquare.com/v2/venues/search?ll=${pos.lat}, ${pos.lng}&radius=1000&intent=browse&query=pub,bar&client_id=${client_id}&client_secret=${client_secret}&v=20181107`)
    .then(handleErrors)
    .then(res => res.json())
//gets array of venues
    .then(data => data.response.venues)
