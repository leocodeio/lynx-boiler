import { useNavigate } from "react-router";

export function Contact() {
  const nav = useNavigate();
  return (
    <view>
      <text>Contact Page</text>
      <text bindtap={() => nav("/")}>Go to Home</text>
    </view>
  );
}
