import React, { useState } from "react";

type DraggableDivProps = {
  children: React.ReactNode;
  title: string;
  initialWidth: number;
  initialHeight: number;
  position: { x: number; y: number };
  onClose: () => void;
  onActivate: () => void;
  zIndex: number;
};

const DraggableDiv: React.FC<DraggableDivProps> = ({
  children,
  title,
  initialWidth,
  initialHeight,
  position: initialPosition,
  onClose,
  onActivate,
  zIndex,
}) => {
  const [position, setPosition] = useState(initialPosition);
  const [size, setSize] = useState({
    width: initialWidth,
    height: initialHeight,
  });
  const [isDragging, setIsDragging] = useState(false);
  const [isResizing, setIsResizing] = useState(false);
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  // Mover la ventana
  const handleDragStart = (e: React.MouseEvent) => {
    setIsDragging(true);
    setOffset({
      x: e.clientX - position.x,
      y: e.clientY - position.y,
    });
    onActivate();
  };

  const handleMove = React.useCallback(
    (e: MouseEvent) => {
      if (isDragging) {
        setPosition({
          x: e.clientX - offset.x,
          y: e.clientY - offset.y,
        });
      }
    },
    [isDragging, offset.x, offset.y]
  );

  const handleDragEnd = () => {
    setIsDragging(false);
  };

  const handleResizeStart = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsResizing(true);
    setOffset({
      x: e.clientX,
      y: e.clientY,
    });
    onActivate();
  };

  const handleResizeMove = React.useCallback(
    (e: MouseEvent) => {
      if (isResizing) {
        setSize((prevSize) => ({
          width: prevSize.width + (e.clientX - offset.x),
          height: prevSize.height + (e.clientY - offset.y),
        }));
        setOffset({
          x: e.clientX,
          y: e.clientY,
        });
      }
    },
    [isResizing, offset.x, offset.y]
  );

  const handleResizeEnd = () => {
    setIsResizing(false);
  };

  React.useEffect(() => {
    document.addEventListener("mousemove", handleMove);
    document.addEventListener("mouseup", handleDragEnd);
    document.addEventListener("mousemove", handleResizeMove);
    document.addEventListener("mouseup", handleResizeEnd);

    return () => {
      document.removeEventListener("mousemove", handleMove);
      document.removeEventListener("mouseup", handleDragEnd);
      document.removeEventListener("mousemove", handleResizeMove);
      document.removeEventListener("mouseup", handleResizeEnd);
    };
  }, [isDragging, isResizing, offset, size, handleMove, handleResizeMove]);

  return (
    <div
      className="absolute bg-gradient-to-b shadow-[5px_7px_20px_5px_rgba(0,0,0,0.7)] from-white to-sky-200 border border-gray-500 rounded-lg min-w-[220px] min-h-[220px]"
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
        width: `${size.width}px`,
        height: `${size.height}px`,
        zIndex: zIndex,
      }}
      onMouseDown={onActivate}
    >
      <div
        className="flex items-center justify-between bg-[var(--primary-color)] px-3 py-1 rounded-t-lg cursor-grab"
        onMouseDown={handleDragStart}
      >
        <div className="text-white">{title}</div>{" "}
        <div className="flex">
          <div
            className="flex items-center text-[12px] text-gray-800 justify-center w-4 h-4 bg-red-500 rounded-full mr-2 cursor-pointer"
            onClick={onClose}
          >
            x
          </div>
          <div
            className="flex items-center text-[16px] text-gray-800 justify-center w-4 h-4 bg-yellow-500 rounded-full mr-2 cursor-pointer"
            onClick={onClose}
          >
            -
          </div>
          <div className="rotate-45 flex items-center text-[8px] text-gray-800 justify-center w-4 h-4 bg-green-500 rounded-full cursor-pointer">
            {"< >"}
          </div>
        </div>
      </div>

      <div
        className="flex w-full h-[calc(100%-32px)] overflow-auto p-4"
        onMouseDown={(e) => e.stopPropagation()}
      >
        {children}
      </div>

      <div
        className="absolute bottom-0 right-0 w-4 h-4 cursor-se-resize"
        onMouseDown={handleResizeStart}
      />
    </div>
  );
};

export default DraggableDiv;
