import React from "react";

export const StartScreen = (props) => {
  const startGame = props.startGame;
  return (
    <div className="flex flex-col justify-center items-center h-72">
        <h1 className="text-center text-lg font-semibold mb-4">Can you guess which song is more popular?</h1>
        <button className="bg-sky-500 hover:bg-sky-700 text-white font-bold py-2 px-4 rounded-full w-44 md:w-48" onClick={startGame}>
                Start Game
              </button>

        <div className="absolute bottom-0 w-full flex justify-center gap-5">
            <a href="https://github.com/EliaRitzmann/spotify-higherlowergame">GutHub</a>
            <a href="https://elia-ritzmann.ch">Elia Ritzmann</a>
        </div>
      
    </div>
  );
};
