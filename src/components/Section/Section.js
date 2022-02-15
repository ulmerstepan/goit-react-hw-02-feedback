import PropTypes from "prop-types";
import { SectionBox, SectionTitle } from "./Section.styled";

export default function Section({ title, children }) {
  return (
    <SectionBox>
      <SectionTitle>{title}</SectionTitle>
      {children}
    </SectionBox>
  );
}

Section.defaultProps = {
  title: "",
  children: [],
};

Section.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
};
