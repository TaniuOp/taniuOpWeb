import { useEffect } from 'react';
import ICodeCards from './ICodeCards';

const ProfileOverview = () => {
  return (
    <>
      <div>
        <h1>TaniuOp</h1>

        <h2>Front-end Developer</h2>

        <h3>Web Designer (UI/UX passionate)</h3>

        <h3>Project manager</h3>
        <h3>Scrum Master</h3>
      </div>
      <p>
        I am a front-end developer specialized in building (occasionally
        designing) and manage digital experiences. Currently, I’m focused on
        building web projects with React Js using TypeScript and multiple Design
        Systems.
      </p>
      <ICodeCards />
    </>
  );
};

export default ProfileOverview;
