import {Link} from 'react-router-dom';

export default function Home() {
  return (
    <div className="homepage">
      <p>Welcome, check out the <Link to="../shopping">shop</Link></p>
      <img src="https://media.tenor.com/dnFoWaEBIZ0AAAAi/evernight-everknight.gif" />
    </div>
  )
};



