const capitalize = s =>
  s.toLowerCase().replace(/(\b[a-zA-Z-0-9](?!\s))/g, function (a) {
    return a.toUpperCase();
  });

export default capitalize;
