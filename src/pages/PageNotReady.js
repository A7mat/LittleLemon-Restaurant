import { faPersonDigging } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const PageNotReady = () => {
  return (
    <div className="container confirmed-booking">
      <FontAwesomeIcon icon={faPersonDigging} size="3x" />
      <h2>This page is under construction.</h2>
      <p>We’ll have it ready for you soon—thanks for your patience!</p>
    </div>
  );
};

export default PageNotReady;
