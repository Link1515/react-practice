import { useLocation } from 'react-router-dom';

export default function NestedPage2() {
  const location = useLocation();
  console.log(location);

  return <div>nestedPage2</div>;
}
