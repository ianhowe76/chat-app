import React from "react";
import classNames from "classnames";

import styles from "./container.module.scss";

interface IContainerProps {
  full: boolean;
}

export const Container: React.FC<IContainerProps> = ({ full, children }) => {
  return (
    <div className={classNames(styles.container, { [styles.fullWidth]: full })}>
      {children}
    </div>
  );
};
