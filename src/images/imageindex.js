function importAll(r) {
  return r.keys().map(r);
}

const images = importAll(
  require.context("./processpics", false, /\.(png|jpe?g|svg)$/)
);

export default images;
