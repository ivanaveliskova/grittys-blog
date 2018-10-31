import React, { Fragment, Component } from "react";
import "./css/HeroBlock.css";

class HeroBlock extends Component {
  render() {
    const { date, title } = this.props;

    return (
      <div className="HeroBlock">
        {title && <h1 className="HeroBlock__title">{title}</h1>}
        {date && (
          <Fragment>
            <hr className="HeroBlock__divider" />
            <h3 className="HeroBlock__sub-title">{date}</h3>
          </Fragment>
        )}
      </div>
    );
  }
}

export default HeroBlock;
