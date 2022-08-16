import React from "react";
import { Block as BlockType } from "../types/Block";
import { Box } from "@mui/material";
import Block from "../components/Block";

type Props = {
  list: Array<BlockType>
}

export const Blocks: React.FC<Props> = ({ list }) => {

  return (
    <Box>
      {list 
        ? list.map((block, index) => (
          
          <Block block={block} key={index}> </Block>
        ))
        : 'Nothing'
      }
    </Box>
  );
};

export default Blocks;
