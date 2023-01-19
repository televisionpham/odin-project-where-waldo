const ContextMenu = (props) => {
  const { top, left, hideContextMenu } = props;
  return (
    <div id="contextMenu" style={{ top: top, left: left }}>
      <div className="menu-item" onClick={() => hideContextMenu()}>
        Cat
      </div>
      <div className="menu-item">Frog</div>
      <div className="menu-item">Helicopter</div>
    </div>
  );
};

export default ContextMenu;
