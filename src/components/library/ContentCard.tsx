import { Box, Card, CardBody, Text, Image } from "@chakra-ui/react";
import React from "react";
import { TimeIcon } from "@chakra-ui/icons";

interface PodcastCardProps {
  imageUri: string;
  time: string;
  contentCategory: string;
  description: string;
  expertName: string;
  expertCompany: string;
}

const ContentCard: React.FC<PodcastCardProps> = ({ imageUri, time, contentCategory, description, expertName, expertCompany }) => {
  return (
    <Card height="272px" width="244px">
      {/* Header with Image Section  */}
      <Box position="absolute" zIndex="1" borderTopLeftRadius="8px" borderBottomRadius="5px" display="flex" flexDirection="row" alignItems="center" gap="4px" p="4px" bg="tigerOrange.50">
        <Image height="12px" src={"/images/Content-status.svg"} alt="Content Status" />
        <Text fontSize="xs" fontWeight="700" color="grey.900">
          30% Completed
        </Text>
      </Box>

      <Box position="relative">
        <Image height="120px" width="244px" borderTopLeftRadius="8px" borderTopRightRadius="6px" src={imageUri} alt="Podcast Image" />
        <Image src={"/images/Content-identifier-lg.svg"} position="absolute" bottom="8px" left="8px" alt="Content Identifier" />
        <Box position="absolute" bottom="8px" right="8px" display="flex" gap="4px" color="white" bg="black" opacity="70%" borderRadius="100px" padding="4px 8px">
          <TimeIcon color="white" />
          <Text fontSize="xs" fontWeight="bold">
            {time}
          </Text>
        </Box>
        <Box position="absolute" bottom={0} left="0" w="100%" h="2px" bg="gray.400">
          <Box w="30%" h="2px" bg="tigerOrange.500" />
        </Box>
      </Box>

      {/* Card Content Section  */}
      <CardBody p="8px">
        <Text fontSize="mhXS" textTransform="uppercase" color="gray.700" fontWeight="medium">
          {contentCategory}
        </Text>
        <Text fontWeight="bold" textTransform="capitalize" height="50px" maxW="200px" noOfLines={2}>
          {description}
        </Text>
        <Text textTransform="capitalize" color="gray.700" fontSize="mhXS" fontWeight="bold" pt={2}>
          {expertName}
        </Text>
        <Text maxW="200px" noOfLines={1} textTransform="capitalize" color="gray.700" fontSize="mhXS" fontWeight="bold">
          {expertCompany}
        </Text>
        <Box display="flex" justifyContent="flex-end" gap="16px" padding="8px">
          <Image src={"/images/Share.svg"} alt="Share Icon" />
          <Image src={"/images/Bookmark.svg"} alt="Bookmark Icon" />
        </Box>
      </CardBody>
    </Card>
  );
};

export default ContentCard;
