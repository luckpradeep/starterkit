export default function getBaseUrl() {
  const hostname = window.location.hostname;
  
  if (hostname === 'localhost') {
    return 'http://localhost:8081/';
  } else if (hostname === 'starterkit-luckpradeep.c9users.io') {
    return 'https://starterkit-luckpradeep.c9users.io:8081/';
  } else {
    return '/'
  }
  //const inDevelopment = window.location.hostname === 'localhost' || ;
  //return inDevelopment ? 'http://localhost:8081/' : '/';
  //return 'https://starterkit-luckpradeep.c9users.io:8081/';
}
