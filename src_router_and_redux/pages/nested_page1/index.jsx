import { useSearchParams, useLocation, useNavigate } from 'react-router-dom';

export default function NestedPage1() {
  let [searchParams] = useSearchParams();
  let location = useLocation();
  let navigate = useNavigate();
  console.log(searchParams.get('aaa'));
  console.log(location);

  function goToPage() {
    navigate('/test');
  }

  return (
    <div>
      <h2>nestedpage</h2>
      <button onClick={goToPage}>test navigate</button>
    </div>
  );
}
