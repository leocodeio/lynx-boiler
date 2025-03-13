import { useNavigate } from "react-router";
import { useState } from "@lynx-js/react";
import { menu, arrow } from "./assets/index.tsx";

export function Home() {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <view className="flex flex-col h-screen">
      <view className="z-10 relative flex flex-row items-center justify-between p-4 bg-white dark:bg-gray-800">
        <view className="flex flex-row items-center">
          <text className="self-center text-xl font-semibold dark:text-white">
            Flowbite Lynx
          </text>
        </view>

        <view className="flex flex-row items-center">
          <view className="flex flex-col items-center justify-center">
            <image
              src={menu}
              style={{ width: 64, height: 64 }}
              bindtap={() => setIsMenuOpen(!isMenuOpen)}
            />
          </view>
        </view>

        {isMenuOpen && (
          <view className="md:hidden absolute top-16 left-0 w-full flex flex-col gap-4 p-2 dark:bg-gray-700">
            <text
              className="p-2 text-blue-700 dark:text-white font-medium"
              bindtap={() => navigate("/")}
            >
              Home
            </text>
            <text
              className="p-2 text-gray-700 dark:text-gray-300"
              bindtap={() => navigate("/dashboard")}
            >
              Go to Dashboard
            </text>
            <text
              className="p-2 text-gray-700 dark:text-gray-300"
              bindtap={() => navigate("/settings")}
            >
              Go to Settings
            </text>
          </view>
        )}
      </view>
      <view className="flex flex-col items-center justify-center flex-grow bg-gray-300">
        <view className="flex flex-col items-center justify-center">
          <image src={arrow} style={{ width: 100, height: 100 }} />
        </view>
        <text>Home Page</text>
      </view>
    </view>
  );
}
