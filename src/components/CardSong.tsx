import { Card } from "@nextui-org/react";
import { CgMusic } from "react-icons/cg";

export default function CardSong({
  song,
  activeSong,
  toggleSong,
  volum,
  onChangeVolum,
}) {
  return (
    <div
      key={song.id}
      style={{
        height: "235px",
        background: "none",
        position: "relative",
        color: activeSong.includes(song.id) ? "white" : "gray",
        transition: "all 0.2s",
      }}
    >
      <Card
        title={song.title}
        clickable
        onClick={() => toggleSong(song.id)}
        css={{
          w: "100%",
          bg: "#ffffff10",
          br: "40px",
          h: "200px",
          dflex: "column",
          ai: "center",
          jc: "center",
          p: "0.5rem",
          gap: "0.5rem",
        }}
      >
        <CgMusic size={100} />
        <p
          style={{
            textAlign: "center",
            overflow: "hidden",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
            width: "140px",
          }}
        >
          {song.title}
        </p>
      </Card>

      {activeSong.includes(song.id) && (
        <input
          type="range"
          min={0}
          max={100}
          value={volum?.filter((volum) => volum.id === song.id)[0]?.valum}
          onChange={(e) => onChangeVolum(e, song.id)}
          style={{
            width: "100%",
            marginTop: "0.8rem",
          }}
        />
      )}

      <audio loop src={song.src} autoPlay={true} id={`audio-${song.id}`} />
    </div>
  );
}
