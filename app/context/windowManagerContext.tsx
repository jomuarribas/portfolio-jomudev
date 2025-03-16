"use client";
import React, { createContext, useContext, useState, ReactNode } from "react";
import DraggableDiv from "../components/DraggableDiv";

type WindowData = {
  id: number;
  content: ReactNode;
  title: string;
  initialWidth: number;
  initialHeight: number;
  position: { x: number; y: number };
  zIndex: number;
};

type WindowManagerContextType = {
  closeAllWindows: () => void;
  addWindow: (
    title: string,
    content: ReactNode,
    width?: number | string,
    height?: number | string
  ) => void;
};

const WindowManagerContext = createContext<
  WindowManagerContextType | undefined
>(undefined);

export const WindowManagerProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [windows, setWindows] = useState<WindowData[]>([]);
  const [zIndexCounter, setZIndexCounter] = useState(1);

  const closeAllWindows = () => {
    setWindows([]);
  };

  const getCenteredPosition = (width: number, height: number) => ({
    x: window.innerWidth / 2 - width / 2,
    y: window.innerHeight / 2 - height / 2,
  });

  const addWindow = (
    title: string,
    content: ReactNode,
    width: number | string = 400,
    height: number | string = 300
  ) => {
    const parsedWidth =
      typeof width === "string"
        ? (parseFloat(width) / 100) * window.innerWidth
        : width;
    const parsedHeight =
      typeof height === "string"
        ? (parseFloat(height) / 100) * window.innerHeight
        : height;

    const windowId = Date.now();

    const newWindow: WindowData = {
      id: windowId,
      title,
      content,
      initialWidth: parsedWidth,
      initialHeight: parsedHeight,
      position: getCenteredPosition(parsedWidth, parsedHeight),
      zIndex: zIndexCounter,
    };

    setWindows((prevWindows) => [...prevWindows, newWindow]);
    setZIndexCounter((prevCounter) => prevCounter + 1);
  };

  const handleActivateWindow = (id: number) => {
    setWindows((prev) =>
      prev.map((win) =>
        win.id === id ? { ...win, zIndex: zIndexCounter } : win
      )
    );
    setZIndexCounter((prev) => prev + 1);
  };

  const handleCloseWindow = (id: number) => {
    setWindows((prev) => prev.filter((win) => win.id !== id));
  };

  return (
    <WindowManagerContext.Provider value={{ addWindow, closeAllWindows }}>
      <div className="relative w-screen h-screen">
        {windows.map((win) => (
          <DraggableDiv
            key={win.id}
            title={win.title}
            initialWidth={win.initialWidth}
            initialHeight={win.initialHeight}
            position={win.position}
            zIndex={win.zIndex}
            onActivate={() => handleActivateWindow(win.id)}
            onClose={() => handleCloseWindow(win.id)}
          >
            {win.content}
          </DraggableDiv>
        ))}
        {children}
      </div>
    </WindowManagerContext.Provider>
  );
};

export const useWindowManager = () => {
  const context = useContext(WindowManagerContext);
  if (!context) {
    throw new Error(
      "useWindowManager debe usarse dentro de WindowManagerProvider"
    );
  }
  return context;
};
