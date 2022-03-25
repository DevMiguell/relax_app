import { Card, Input } from "@nextui-org/react";
import type { NextPage } from "next";
import { useEffect, useState } from "react";
import { CgMusic } from "react-icons/cg";
import { AllSongs } from "../assets/songs";

const Home: NextPage = () => {
  const [activeSong, setActiveSong] = useState([]);
  // const audioRef = useRef(null);\
  const [volum, setVolum] = useState([]);

  const toggleSong = (id: number) => {
    if (activeSong.includes(id)) {
      setActiveSong(activeSong.filter((songId) => songId !== id));
      const audio: any = document.getElementById(`audio-${id}`);
      audio.pause();
    } else {
      setActiveSong([...activeSong, id]);
      const audio: any = document.getElementById(`audio-${id}`);
      audio.play();
    }
  };

  const onChangeVolum = (e, id) => {
    const audio: any = document.getElementById(`audio-${id}`);
    audio.volume = e.target.value / 100;

    if (audio.volume === 0) {
      audio.pause();
    }

    volum.map((item) => {
      if (item.id === id) {
        item.volum = e.target.value;
      }
    });

    setVolum([...volum]);
  };

  useEffect(() => {
    activeSong.map((songId) => {
      const audio: any = document.getElementById(`audio-${songId}`);
      audio.volume = 10;
      audio.pause();
    });
  }, []);

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
        gridGap: "2rem",
      }}
    >
      {AllSongs.map((song, i) => (
        <Card
          key={song.id}
          css={{
            height: "235px",
            background: "none",
            position: "relative",
            color: activeSong.includes(song.id) ? "white" : "gray",
            transition: "all 0.1s",

            "& .nextui-c-ioOuFC-ikChoxe-css": {
              transition: "all 0.4s",
              opacity: activeSong.includes(song.id) ? 1 : 0,
            },

            "&:hover": {
              color: "white",
            },
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
                overflow: "hidden",
                textOverflow: "ellipsis",
                whiteSpace: "nowrap",
                width: "140px",
              }}
            >
              {song.title}
            </p>
          </Card>

          <Input
            type="range"
            min={0}
            max={100}
            value={volum?.filter((volum) => volum.id === song.id)[0]?.valum}
            onChange={(e) => onChangeVolum(e, song.id)}
            css={{
              w: "100%",
              mt: "0.8rem",
              br: "40px",
              height: "1rem",

              opacity: activeSong.includes(song.id) ? 1 : 0,
            }}
          />

          <audio loop src={song.src} autoPlay={true} id={`audio-${song.id}`} />
        </Card>
      ))}
    </div>
  );
};

export default Home;
