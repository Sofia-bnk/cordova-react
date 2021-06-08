/* global Media */

function Play() {
  let mySong = new Media("sofia.mp3");
  function playing() {
    mySong.play();
  }
  function pause() {
    mySong.pause();
  }

  return (
    <>
      <button
        onClick={playing}
        style={{
          backgroundColor: "orange",
          fontSize: "3rem",
          margin: "2rem",
          borderRadius: "5%",
        }}
      >
        Play
      </button>
      <button
        onClick={pause}
        style={{
          backgroundColor: "red",
          fontSize: "3rem",
          margin: "2rem",
          borderRadius: "5%",
        }}
      >
        Pause
      </button>
    </>
  );
}
export default Play;
