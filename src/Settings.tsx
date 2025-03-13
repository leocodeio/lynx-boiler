import { useNavigate } from "react-router";

export function Settings() {
  const nav = useNavigate();
  return (
    <view className="flex flex-col items-center justify-center h-screen">
      <text className="text-2xl font-bold">Settings Page</text>
      <text className="text-lg" bindtap={() => nav("/")}>Go to Home</text>
    </view>
  );
}
