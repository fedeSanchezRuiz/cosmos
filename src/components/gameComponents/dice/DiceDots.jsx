import classes from './SixDice.module.css';

const DiceDots = ({ value }) => {
  switch (value) {
    case 1:
      return <div className={classes.dot} />;
    case 2:
      return (
        <>
          <div className={`${classes.dot} ${classes.topLeft}`} />
          <div className={`${classes.dot} ${classes.bottomRight}`} />
        </>
      );
    case 3:
      return (
        <>
          <div className={`${classes.dot} ${classes.topLeft}`} />
          <div className={classes.dot} />
          <div className={`${classes.dot} ${classes.bottomRight}`} />
        </>
      );
    case 4:
      return (
        <>
          <div className={`${classes.dot} ${classes.topLeft}`} />
          <div className={`${classes.dot} ${classes.topRight}`} />
          <div className={`${classes.dot} ${classes.bottomLeft}`} />
          <div className={`${classes.dot} ${classes.bottomRight}`} />
        </>
      );
    case 5:
      return (
        <>
          <div className={`${classes.dot} ${classes.topLeft}`} />
          <div className={`${classes.dot} ${classes.topRight}`} />
          <div className={classes.dot} />
          <div className={`${classes.dot} ${classes.bottomLeft}`} />
          <div className={`${classes.dot} ${classes.bottomRight}`} />
        </>
      );
    case 6:
      return (
        <>
          <div className={`${classes.dot} ${classes.topLeft}`} />
          <div className={`${classes.dot} ${classes.topRight}`} />
          <div className={`${classes.dot} ${classes.midLeft}`} />
          <div className={`${classes.dot} ${classes.midRight}`} />
          <div className={`${classes.dot} ${classes.bottomLeft}`} />
          <div className={`${classes.dot} ${classes.bottomRight}`} />
        </>
      );
    default:
      return null;
  }
};

export default DiceDots;