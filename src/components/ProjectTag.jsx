import React from "react";

const ProjectTag = ({ name, onClick, isSelected }) => {
  const buttonStyles = isSelected
    ? "text-neutral border-primary"
    : "text-[#adb7be] border-slate-600 hover:border-white";
  return (
    <button
      className={`${buttonStyles}  rounded-full border-2 px-3 py-1.5 md:px-6 md:py-3 text-xl cursor-pointer text-neutral`}
      onClick={() => onClick(name)}
    >
      {name}
    </button>
  );
};

export default ProjectTag;
