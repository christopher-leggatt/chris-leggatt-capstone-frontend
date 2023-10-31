import { Box, styled } from "@mui/material";
import clsx from "clsx";
const StyledBox = styled(Box, {
  shouldForwardProp: (props) => props !== "textTransformStyle",
})(({ textTransformStyle, ellipsis }) => ({
  textTransform: textTransformStyle || "none",
  whiteSpace: ellipsis ? "nowrap" : "normal",
  overflow: ellipsis ? "hidden" : "",
  textOverflow: ellipsis ? "ellipsis" : "",
}));

// ============================================

// ============================================

export const PageHeader = ({
  children,
  className,
  ellipsis,
  textTransform,
  ...props
}) => {
  return (
    <StyledBox
      textTransformStyle={textTransform}
      ellipsis={ellipsis ? 1 : undefined}
      className={clsx({
        [className || ""]: true,
      })}
      component="h1"
      mb={0}
      mt={0}
      fontSize="30px"
      fontWeight="700"
      lineHeight="1.5"
      fontFamily="Newsreader Variable"
      {...props}
    >
      {children}
    </StyledBox>
  );
};

export const SectionHeader = ({
  children,
  className,
  ellipsis,
  textTransform,
  ...props
}) => {
  return (
    <StyledBox
      textTransformStyle={textTransform}
      ellipsis={ellipsis ? 1 : undefined}
      className={clsx({
        [className || ""]: true,
      })}
      component="h2"
      mb={0}
      mt={0}
      fontSize="25px"
      fontWeight="700"
      lineHeight="1.5"
      fontFamily="Newsreader Variable"
      {...props}
    >
      {children}
    </StyledBox>
  );
};

export const SubheaderMedium = ({
  children,
  className,
  ellipsis,
  textTransform,
  ...props
}) => {
  return (
    <StyledBox
      mb={0}
      mt={0}
      component="h3"
      fontSize="20px"
      fontWeight="700"
      lineHeight="1.5"
      ellipsis={ellipsis ? 1 : undefined}
      textTransformStyle={textTransform}
      className={clsx({
        [className || ""]: true,
      })}
      {...props}
    >
      {children}
    </StyledBox>
  );
};

export const SubheaderSmall = ({
  children,
  className,
  ellipsis,
  textTransform,
  ...props
}) => {
  return (
    <StyledBox
      mb={0}
      mt={0}
      component="h4"
      fontSize="17px"
      fontWeight="600"
      lineHeight="1.5"
      ellipsis={ellipsis ? 1 : undefined}
      textTransformStyle={textTransform}
      className={clsx({
        [className || ""]: true,
      })}
      {...props}
    >
      {children}
    </StyledBox>
  );
};

export const SubheaderExtraSmall = ({
  children,
  className,
  ellipsis,
  textTransform,
  ...props
}) => {
  return (
    <StyledBox
      mb={0}
      mt={0}
      component="h4"
      fontSize="10px"
      fontWeight="500"
      lineHeight="1.4"
      ellipsis={ellipsis ? 1 : undefined}
      textTransformStyle={textTransform}
      className={clsx({
        [className || ""]: true,
      })}
      {...props}
    >
      {children}
    </StyledBox>
  );
};

export const H5 = ({
  children,
  className,
  ellipsis,
  textTransform,
  ...props
}) => {
  return (
    <StyledBox
      textTransformStyle={textTransform}
      ellipsis={ellipsis ? 1 : undefined}
      className={clsx({
        [className || ""]: true,
      })}
      component="h5"
      mb={0}
      mt={0}
      fontSize="16px"
      fontWeight="600"
      lineHeight="1.5"
      {...props}
    >
      {children}
    </StyledBox>
  );
};

export const H6 = ({
  children,
  className,
  ellipsis,
  textTransform,
  ...props
}) => {
  return (
    <StyledBox
      textTransformStyle={textTransform}
      ellipsis={ellipsis ? 1 : undefined}
      className={clsx({
        [className || ""]: true,
      })}
      component="h6"
      mb={0}
      mt={0}
      fontSize="14px"
      fontWeight="600"
      lineHeight="1.5"
      {...props}
    >
      {children}
    </StyledBox>
  );
};

export const BodyCopy = ({
  children,
  className,
  ellipsis,
  textTransform,
  ...props
}) => {
  return (
    <StyledBox
      textTransformStyle={textTransform}
      ellipsis={ellipsis ? 1 : undefined}
      className={clsx({
        [className || ""]: true,
      })}
      component="p"
      mb={0}
      mt={0}
      fontSize="14px"
      lineHeight= "1.2857"
      {...props}
    >
      {children}
    </StyledBox>
  );
};

export const BodyCopyAlt = ({
  children,
  className,
  ellipsis,
  textTransform,
  ...props
}) => {
  return (
    <StyledBox
      textTransformStyle={textTransform}
      ellipsis={ellipsis ? 1 : undefined}
      className={clsx({
        [className || ""]: true,
      })}
      component="p"
      mb={0}
      mt={0}
      fontSize="12px"
      lineHeight= "1.3333"

      {...props}
    >
      {children}
    </StyledBox>
  );
};


export const InputFieldCopy = ({
  children,
  className,
  ellipsis,
  textTransform,
  ...props
}) => {
  return (
    <StyledBox
      textTransformStyle={textTransform}
      ellipsis={ellipsis ? 1 : undefined}
      className={clsx({
        [className || ""]: true,
      })}
      component="small"
      fontSize="12px"
      lineHeight="1.5"
      {...props}
    >
      {children}
    </StyledBox>
  );
};

export const Span = ({
  children,
  className,
  ellipsis,
  textTransform,
  ...props
}) => {
  return (
    <StyledBox
      textTransformStyle={textTransform}
      ellipsis={ellipsis ? 1 : undefined}
      className={clsx({
        [className || ""]: true,
      })}
      component="span"
      lineHeight="1.5"
      {...props}
    >
      {children}
    </StyledBox>
  );
};

export const Tiny = ({
  children,
  className,
  ellipsis,
  textTransform,
  ...props
}) => {
  return (
    <StyledBox
      textTransformStyle={textTransform}
      ellipsis={ellipsis ? 1 : undefined}
      className={clsx({
        [className || ""]: true,
      })}
      component="small"
      fontSize="10px"
      lineHeight="1.5"
      {...props}
    >
      {children}
    </StyledBox>
  );
};
