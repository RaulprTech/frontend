
export default getData = () => {
  return fetch('http://localhost:8080/data.json')
    .then(
      res => res.json(),
    )
    .catch(err => console.log(err));
};
