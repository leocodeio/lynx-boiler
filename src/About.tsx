import { useNavigate } from "react-router";

export function About() {
  const nav = useNavigate();
  return (
    <view>
      <text>About Page</text>
      <text bindtap={() => nav("/")}>Go to Home</text>
    </view>
  );
}
