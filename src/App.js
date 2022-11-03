import React from "react";

function Profile_Img() {
  return (
    <div id="profile_img">
      <img
        className="profile-image"
        src="profile-img.jpeg"
        alt="Avatar"
        style={{ width: 150 }}
      ></img>
    </div>
  );
}
<br />;
function Slack_Img() {
  return (
      <a href="https://app.slack.com/client/T042F7V19Q8/D048FMZEB3Q/rimeto_profile/U049C1CQQ00">
        <img
          className="icon-image"
          src="slack.png"
          alt="Avatar"
          style={{ width: 30 }}
        ></img>
      </a>
  );
}
<br />;
function GitHub_Img() {
  return (
      <a href="https://github.com/obimbiyo">
        <img
          className="icon-image"
          src="github.png"
          alt="Avatar"
          style={{ width: 30 }}
        ></img>
      </a>
  );
}
<br />;
function Name() {
  return (
    <div>
      <h1>Obiyo Onyekwo</h1>
    </div>
  );
}
function Twitter() {
  return (
    <div id="twitter">
      <button type="button">
        <span></span>
        <a href="https://twitter.com/OOnyekwo?t=7b3EHaKsVabUmpP7vETrBA&S=09">
          Twitter Link
        </a>
      </button>
    </div>
  );
}
function Btn_Zuri() {
  return (
    <div btn_zuri>
      <button type="button">
        <span></span>
        <a href="https://training.zuri.team/">Zuri Team</a>
      </button>
    </div>
  );
}
function Books() {
  return (
    <div id="books">
      <button type="button">
        <span></span>
        <a href="http://books.zuri.team">Zuri Books</a>
      </button>
    </div>
  );
}
function Book_Python() {
  return (
    <div id="book_python">
      <button type="button">
        <span></span>
        <a href="https://books.zuri.team/">Python Books</a>
      </button>
    </div>
  );
}
function Pitch() {
  return (
    <div id="pitch">
      <button type="button">
        <span></span>
        <a href="https://background.zuri.team/">Background Check For Coders</a>
      </button>
    </div>
  );
}
function Book_Design() {
  return (
    <div id="book_design">
      <button type="button">
        <span></span>
        <a href="https://books.zuri.team/design-rules">Design Books</a>
      </button>
    </div>
  );
}

const Footer = () => {
  return (
    <footer className="w-full max-w-full min-h-auto py-12 px-4 sm:px-12 lg:px-28 flex justify-center items-center absolute bottom-0">
      <div className="m-auto w-full max-w-custom flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6 border-t-1 border-zuriGray-200 pt-6">
        <img
          src="5G-Logor.jpeg"
          alt="ingressive_for_good"
          width={200}
          height={30}
        />
        <p className="text-zuriGray-500 text-base font-default font-normal text-center">
          HNG Internship 9 Frontend Task
        </p>
        <img src="4G-Logo.png" alt="zuri_internship" width={200} height={35} />
      </div>
    </footer>
  );
};

function App() {
  return (
    <section className="main-page">
      {/* <Share_Profile /> */}
      <Profile_Img /> <br />
      <Name /> <br /> <br />
      <Twitter /> <br />
      <Btn_Zuri /> <br />
      <Books /> <br />
      <Book_Python /> <br />
      <Pitch /> <br />
      <Book_Design /> <br /> <br />
      <Slack_Img />
      <GitHub_Img /> <br /> <br /> <br /> <br />
      <Footer />
    </section>
  );
}

export default App;
