export default function getBaseUrl() {
  const hostname = window.location.hostname;
  
  if (hostname === 'localhost') {
    return 'http://localhost:8081/';
  } else if (hostname === 'starterkit-luckpradeep.c9users.io') {
    return 'https://starterkit-luckpradeep.c9users.io/';
    // todo luckpradeep for webpack.config.prod need to set it to /
    //return 'https://starterkit-luckpradeep.c9users.io:8081/';
  } else {
    return '/'
  }
}

function getQueryStringParameterByName(name, url) {
  if (!url) url = window.location.href;
  name = name.replace(/[\[\]]/g, '\\$&');
  var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
    results = regex.exec(url);
  if (!results) return null;
  if (!results[2]) return '';
  return decodeURIComponent(results[2].replace(/\+/g), ' ');
}
