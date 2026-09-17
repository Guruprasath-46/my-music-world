import songs from "../data/songs";

function Songs() {
  return (
    <div className="songs-container">
      <h1>🎵 My Music World</h1>

      <div className="songs-list">
        {songs.map((song) => (
          <div className="song-card" key={song.id}>
            <h3>{song.name}</h3>

            <p>{song.singer}</p>

            <a
              href={song.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              ▶ Play Song
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Songs;