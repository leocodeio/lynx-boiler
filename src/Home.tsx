import { useNavigate } from 'react-router';

export function Home() {
  const navigate = useNavigate();

  return (
    <view>
      <text bindtap={() => navigate('/about')}>Go to About</text>
      <text bindtap={() => navigate('/contact')}>Go to Contact</text>
    </view>
  );
}
