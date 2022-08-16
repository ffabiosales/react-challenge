import React from "react";
import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";
import colors from "../constants/colors";
type Props = {
  block: any;
};

const BlockBox = styled(Box)({
  padding: 8,
  marginBottom: 4,
  fontWeight: 400,
  fontSize: 14,
  lineHeight: '20px',
  color: colors.text,
  backgroundColor: 'rgba(0, 0, 0, 0.12)'
});

const BlockIndex = styled(Box)({
  fontWeight: 700,
  fontSize: 10,
  color: colors.index,
  lineHeight: '16px'
});

const Block: React.FC<Props> = ({ block }) => {
  return (
    <BlockBox>
      <BlockIndex>{block.attributes.index}</BlockIndex>
      {block.attributes.data}
    </BlockBox>
  );
};

export default Block;
