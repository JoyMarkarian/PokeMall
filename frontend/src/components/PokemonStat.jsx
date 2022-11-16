function PokemonStat({ type, stat, text }) {
  return (
    <div className="d-flex flex-column align-items-center col-4">
      <div className={`rounded-circle stats oneProductStats ${type}`}>
        <p className="text-center textRegular text-white">{stat}</p>
      </div>
      <h5 className="text-center textRegular mt-2">{text}</h5>
    </div>
  );
}
export default PokemonStat;
