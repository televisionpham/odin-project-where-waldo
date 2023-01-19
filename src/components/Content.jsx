import { useEffect, useState } from "react";
import Header from "./Header";
import picture from "../assets/picture.webp";
import ContextMenu from "./ContextMenu";

const Content = () => {
  const [isActive, setIsActive] = useState(false);
  const [showContextMenu, setShowContextMenu] = useState(false);
  const [contextMenuPosition, setContextMenuPosition] = useState({
    top: 0,
    left: 0,
  });

  useEffect(() => {
    setIsActive(true);
  }, []);

  const handleImageClick = (e) => {
    console.log(e.target.naturalWidth, e.target.naturalHeight);
    setContextMenuPosition({ top: e.pageY, left: e.pageX });
    setShowContextMenu(!showContextMenu);
  };

  const hideContextMenu = () => {
    setShowContextMenu(false);
  };

  return (
    <>
      {showContextMenu ? (
        <ContextMenu
          top={contextMenuPosition.top}
          left={contextMenuPosition.left}
          hideContextMenu={hideContextMenu}
        />
      ) : null}
      <Header isActive={isActive} />
      <div className="picture-container">
        <img src={picture} id="picture" onClick={handleImageClick} />
      </div>
    </>
  );
};

export default Content;
