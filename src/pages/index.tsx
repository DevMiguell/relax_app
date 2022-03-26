import { Button, Divider, Text } from "@nextui-org/react";
import type { NextPage } from "next";
import { useEffect, useState } from "react";
import { AiOutlineClear } from "react-icons/ai";
import { MultiSongs, SingleSongs } from "../assets/songs";
import CardSong from "../components/CardSong";
import ContainerDB from "../components/Container";

const Home: NextPage = () => {
  const [activeSong, setActiveSong] = useState([]);
  const [volum, setVolum] = useState([]);

  const handleStopAll = () => {
    const audio: any = document.getElementsByTagName("audio");
    for (let i = 0; i < audio.length; i++) {
      audio[i].pause();
    }

    setActiveSong([]);
  };

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
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-end",
        }}
      >
        <Button
          onClick={handleStopAll}
          title="Stop All"
          auto
          ghost
          color="error"
          css={{
            p: "0.5rem",
          }}
        >
          <AiOutlineClear size={30} />
        </Button>
      </div>
      <div>
        <Text
          h2
          css={{
            p: "1rem 0 2rem 0.5rem",
          }}
        >
          Single Songs
        </Text>
        <ContainerDB>
          {SingleSongs.map((song, i) => (
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

        <Divider />
        <Text
          h2
          css={{
            p: "2rem 0 2rem 0.5rem",
          }}
        >
          Ambience Songs
        </Text>
        <ContainerDB>
          {MultiSongs.map((song, i) => (
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
      </div>
    </>
  );
};

export default Home;
