import React from "react";
import { withStyles } from "@material-ui/core/styles";
import { mapDispatchToProps } from "../../ui-utils/commons";
import { connect } from "react-redux";
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';


const styles = {
  root: {
    width: "100vw",
    height: "100vh",
    display: "flex",
    justifyContent: "center",
  },
  container: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  lcardConatiner: {
    width: "316px",
    height: "179px",
    backgroundColor: "#00589F",
  },
  rcardConatiner: {
    width: "316px",
    height: "179px",
    backgroundColor: "#fff",

  },
  paragraph:{
    textAlign: "left",
    font: "normal normal bold 20px/23px Arial",
    letterSpacing: "1px",
    color: "#FFFFFF",
    textTransform: "uppercase",
    opacity: "1",
  },
  logo:{
    background: "transparent",
    position: "absolute",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  }
};

class Login extends React.Component {

  login = async () => {
  };

  render() {
    const { classes } = this.props;
    return (
      <Grid className={classes.root}>
        <div>
          <img className={classes.logo} src="../ui-atoms/Images/logo-login.svg" alt="logo"/>
        </div>
        <Grid className={classes.container}>
          <Card className={classes.lcardConatiner}>
            <p className = {classes.paragraph}>WELKOM BIJ MIJN NMT</p>

          </Card>
        </Grid>
        <Grid className={classes.container}>
          <Card className={classes.rcardConatiner}>

          </Card>
        </Grid>
      </Grid>
    );
  }
}

const mapStateToProps = ({ screenConfiguration = {} }) => {
  const { preparedFinalObject = {} } = screenConfiguration;
  const { login = {}, userInfo = {} } = preparedFinalObject;
  return { login, userInfo };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(Login));
