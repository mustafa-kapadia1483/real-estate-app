import { useContext } from "react";
import Image from "next/image";
import { Box, Flex, Icon } from "@chakra-ui/react";
import { ScrollMenu, VisibilityContext } from "react-horizontal-scrolling-menu";
import { FaArrowCircleRight, FaArrowCircleLeft } from "react-icons/fa";

const LeftArrow = () => {
  const { scrollPrev } = useContext(VisibilityContext);
  return (
    <Flex justifyContent="center" alignItems="center" marginRight="1">
      <Icon
        as={FaArrowCircleLeft}
        onClick={() => scrollPrev()}
        fontSize="2xl"
        cursor="pointer"
      />
    </Flex>
  );
};

const RightArrow = () => {
  const { scrollNext } = useContext(VisibilityContext);
  return (
    <Flex justifyContent="center" alignItems="center" marginRight="1">
      <Icon
        as={FaArrowCircleRight}
        onClick={() => scrollNext()}
        fontSize="2xl"
        cursor="pointer"
      />
    </Flex>
  );
};

const ImageScrollBar = ({ data }) => (
  <ScrollMenu
    LeftArrow={LeftArrow}
    RightArrow={RightArrow}
    style={{ overflow: "hidden" }}
  >
    {data.map(image => (
      <Box
        key={image.id}
        width="900px"
        itemId={image.id}
        overflow="hidden"
        p="1"
      >
        <Image
          alt="property"
          placeholder="blur"
          blurDataURL={image.url}
          src={image.url}
          width={1000}
          height={500}
          sizes="(max-width:500px) 100px, (max-width: 1024px) 400px"
        />
      </Box>
    ))}
  </ScrollMenu>
);

export default ImageScrollBar;
