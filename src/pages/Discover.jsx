import { Error, Loader, SongCard } from "../components";
import { genres } from "../assets/constants";
const Discover = () => {
  //   console.log(genres);
  const genreTitle = "POP";

  return (
    <div className="flex flex-col">
      <div className="w-full flex justify-between items-center flex-col sm:flex-row mt-4 mb-10">
        <h2 className="text-left font-bold text-3xl text-white">
          Discover {genreTitle}
        </h2>
        <select
          onChange={() => {}}
          value=""
          className="bg-black text-gray-300 p-3 text-sm rounded-lg outline-none mt-5 sm:mt-0"
        >
          {genres.map((genre) => (
            <option key={genre.value} value={genre.value}>
              {genre.title}
            </option>
          ))}
        </select>
      </div>
      <div className="flex flex-wrap justify-center sm:justify-start gap-8">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((song, i) => (
          <SongCard i={i} key={song.key} song={song} />
        ))}
      </div>
    </div>
  );
};

export default Discover;
