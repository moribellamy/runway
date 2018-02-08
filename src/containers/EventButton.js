import { connect } from 'react-redux';
import { resizeRunwayChart } from '../actions';
import Button from '../components/Button';

// I dont use this but good example...

const mapStateToProps = (state, ownProps) => ({
  ...ownProps
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  onClick: () => {
    dispatch(resizeRunwayChart(1000, 500));
  }
});

const EventButton = connect(mapStateToProps, mapDispatchToProps)(Button);

export default EventButton;
