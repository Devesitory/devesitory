import React, { ReactNode, useMemo } from "react";

interface Props {
  children: ReactNode;
  block?: boolean;
}

const Highlight = ({ children, block = false }: Props) => {
  const componentStyle = useMemo(() => {
    const common = {
      fontFamily: '"Kanit", sans-serif',
      color: "white",
      fontWeight: 600,
    };

    if (block) {
      return {
        ...common,
        backgroundColor: "var(--ifm-color-primary)",
        paddingLeft: "0.25em",
        paddingRight: "0.25em",
      };
    }

    return {
      ...common,
      color: "var(--ifm-color-primary)",
    };
  }, [block]);

  return <span style={componentStyle}>{children}</span>;
};

export default Highlight;
