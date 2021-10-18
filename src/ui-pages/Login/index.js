import React from "react";
import { withStyles } from "@material-ui/core/styles";
import { mapDispatchToProps } from "../../ui-utils/commons";
import { connect } from "react-redux";
import { Button, Paper, Grid, IconButton, Icon } from "@material-ui/core";

const styles = theme => ({
  root: {
    flexGrow: 1,
    position: "relative"
  },
  imagePos: {
    position: "absolute",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
    width: "100%"
  },
  Lpaper: {
    backgroundColor: "#00589F",
    height: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  Rpaper: {
    backgroundColor: "#fff",
    height: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  lcardContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "654px",
    height: "722px",
    backgroundColor: "#00589F",
    borderRadius: "unset"
  },
  rcardContainer: {
    width: "654px",
    height: "722px",
    backgroundColor: "#fff",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "unset"
  },
  LcardHeading: {
    textAlign: "left",
    font: "normal normal bold 20px/23px Arial",
    letterSpacing: "1px",
    color: "#FFFFFF",
    textTransform: "uppercase",
    opacity: "1"
  },
  logo: {
    width: "162px",
    height: "203px",
    background: "transparent",
    position: "absolute",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  LsubCard: {
    width: "337px",
    height: "303px",
    backgroundColor: "#00589F",
    margin: "unset",
    boxShadow: "unset"
  },
  LCardParagraph: {
    textAlign: "left",
    font: "normal normal normal 15px/17px Arial",
    letterSpacing: "0.75px",
    color: "#FFFFFF",
    opacity: "1",
    width: "337px",
    height: "74px",
    margin: "50px 0px"
  },
  LcardButton: {
    border: "1px solid #fff",
    font: "normal normal normal 15px/17px Arial",
    letterSpacing: "0.75px",
    color: "#FFFFFF",
    opacity: "1",
    borderRadius: "unset"
  },
  Lrectangle: {
    display: "inline-block",
    width: "97px",
    height: "6px",
    background: "#fff"
  },
  RCardHeading: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    font: "normal normal bold 20px/23px Arial",
    letterSpacing: "1px",
    color: "#000000",
    textTransform: "uppercase",
    opacity: "1"
  },
  RRectangle: {
    width: "45px",
    height: "6px",
    background: "#00589F",
    opacity: "1",
    margin: "0px 130px"
  },
  RCardButton: {
    width: "319px",
    background: "#00589F",
    borderRadius: "3px",
    fontSize: 17,
    opacity: "1",
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
    margin: "30px 0px",
    "&:hover": {
      background: "#00589F"
    },
    padding: 0
  },
  text: {
    width: "100%",
    textAlign: "center",
    color: "#fff"
  },
  leftIcon: {
    backgroundColor: "#003E70",
    padding: 4
  }
});

class Login extends React.Component {
  // login = async () => {
  // };

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <div className={classes.imagePos}>
          <img
            className={classes.logo}
            src="ui-assets/images/logo-login.svg"
            alt="logo"
          />
        </div>
        <Grid container>
          <Grid item md={6} sm={6} xs={12} xl={6}>
            <Paper className={classes.Lpaper}>
              <div>
                <h1 className={classes.LcardHeading}>WELKOM BIJ MIJN NMT</h1>
                <div className={classes.Lrectangle}></div>
                <p className={classes.LCardParagraph}>
                  {" "}
                  In mijn NMT kan je jouw eigen bedrijvengids bijwerken,
                  gegevens van de organisatie beheren en je inschrijven voor
                  projecten en evenementen.
                </p>
                <Button className={classes.LcardButton}>Lees meer</Button>
              </div>
            </Paper>
          </Grid>
          <Grid item md={6} sm={6} xs={12} xl={6}>
            <Paper className={classes.Rpaper}>
              <div>
                <h1 className={classes.RCardHeading}>login</h1>
                <div className={classes.RRectangle}></div>
                <IconButton className={classes.RCardButton}>
                  <div className={classes.leftIcon}>
                    <img
                      src="ui-assets/images/icons8-windows-10.svg"
                      alt="logo"
                    />
                  </div>
                  <span className={classes.text}> LOGIN MET MICROSOFT</span>
                </IconButton>
              </div>
            </Paper>
          </Grid>
        </Grid>
      </div>
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
