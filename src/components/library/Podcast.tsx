import { Box, Card, CardBody, Text, Image, IconButton } from "@chakra-ui/react";
import React from "react";
import { TimeIcon } from "@chakra-ui/icons";

interface PodcastCardProps {
  name: string;
  imageUri: string;
}

const PodcastCard: React.FC<PodcastCardProps> = ({ name, imageUri }) => {
  return (
    <Card height="272px" width="244px">
      <Box position="absolute" zIndex="1" border="none" display="flex" flexDirection="row" alignItems="center" gap="4px" p="4px" borderTopRightRadius="0" borderBottomLeftRadius="0" bg="tigerOrange.50">
        <Image height="12px" src={"/images/Content-status.svg"} alt="Content Status" />
        <Text fontSize="xs" fontWeight="700" color="grey.900">
          30% Completed
        </Text>
      </Box>

      <Box position="relative">
        <Image height="120px" width="244px" borderTopLeftRadius="8px" borderTopRightRadius="8px" src={imageUri} alt="Podcast Image" />
        <Image src={"/images/Content-identifier-lg.svg"} position="absolute" bottom="8px" left="8px" alt="Content Identifier" />
        <Box position="absolute" bottom="8px" right="8px" display="flex" gap="4px" color="white" bg="black" opacity="70%" borderRadius="100px" padding="4px 8px">
          <TimeIcon color="white" />
          <Text fontSize="xs" fontWeight="bold">
            20m
          </Text>
        </Box>
      </Box>

      <CardBody p="8px">
        <Text fontSize="xs">COMMUNICATING AS A LEADER</Text>
        <Text fontSize="md" fontWeight="bold">
          {name}
        </Text>
        <Text fontSize="xs">Jane Doe</Text>
        <Text fontSize="xs">Subway APAC</Text>
        <Box display="flex" justifyContent="flex-end" gap="4px">
          <IconButton aria-label="Share on Twitter" bg="transparent">
            <Image src={"/images/Share.svg"} alt="Share Icon" />
          </IconButton>
          <IconButton aria-label="Share on LinkedIn" bg="transparent">
            <Image src={"/images/Share.svg"} alt="Share Icon" />
          </IconButton>
        </Box>
      </CardBody>
    </Card>
  );
};

export default PodcastCard;
