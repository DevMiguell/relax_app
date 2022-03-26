import type { NextPage } from "next";
import { useEffect, useState } from "react";
import { AllSongs } from "../assets/songs";
import CardSong from "../components/CardSong";
import ContainerDB from "../components/Container";

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
    <ContainerDB>
      {AllSongs.map((song, i) => (
        <CardSong
          key={i}
          song={song}
          activeSong={activeSong}
          toggleSong={toggleSong}
          volum={volum}
          onChangeVolum={onChangeVolum}
        />
      ))}
    </ContainerDB>
  );
};

export default Home;
