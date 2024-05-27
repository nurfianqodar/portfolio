import React from "react";

const SubsButton = () => {
  return (
    <>
      <script src='https://apis.google.com/js/platform.js'></script>

      <div
        className='g-ytsubscribe flex h-20 bg-slate-500 w-32'
        data-channelid='UC7VfdDrBeigCtMHprRngYDw'
        data-layout='full'
        data-count='hidden'
      ></div>
    </>
  );
};

export default SubsButton;
