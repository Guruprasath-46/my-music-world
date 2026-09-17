import songs from "../data/songs";

function Songs() {
  const user = localStorage.getItem("name");

  return (
    <div className="songs-container">
      <h1>Welcome {user}</h1>
      <h2>My Music World</h2>

      {songs.map((song) => (
        <div className="song-card" key={song.id}>
          <h3>{song.name}</h3>
          <p>{song.singer}</p>

          <a
            href={song.link}
            target="_blank"
            rel="noreferrer"
          >
            Play Song
          </a>
        </div>
      ))}
    </div>
  );
}

export default Songs;