import React from "react";
import { withRouter } from "react-router-dom";
import Snackbar from "./ui-containers/SnackBar";
import CircularProgress from "@material-ui/core/CircularProgress";
import { mapDispatchToProps } from "./ui-utils/commons";
import MainRoutes from "./ui-routes/MainRoutes";
import isEmpty from "lodash/isEmpty";
import { connect } from "react-redux";
import "./App.css";

class App extends React.Component {

  render() {
    const { spinner, userInfo } = this.props;
    return (
      <div>
        <MainRoutes />
        <Snackbar />
        {spinner && isEmpty(userInfo) && (
          <div
            style={{
              position: "absolute",
              left: "50%",
              top: "50%",
              transform: "translate(-50%, -50%)"
            }}
          >
            <CircularProgress />
          </div>
        )}
      </div>
    );
  }
}

const mapStateToProps = ({ screenConfiguration }) => {
  const { preparedFinalObject = {} } = screenConfiguration;
  const { spinner = false, userInfo = {} } = preparedFinalObject;
  return { spinner, userInfo };
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(App));
