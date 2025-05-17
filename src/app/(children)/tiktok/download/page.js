"use client";
import React, { useState } from "react";
import { Box, Button, Input, FormControl, FormLabel, Heading, VStack, Link, Text, Alert, AlertIcon, HStack } from "@chakra-ui/react";
import axios from "axios";
import { FiDownload } from "react-icons/fi";
import Title from "@/components/Title";

export default function TikTokPage() {
  const [url, setUrl] = useState("");
  const [videoUrl, setVideoUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setVideoUrl("");
    if (!url.includes("tiktok.com")) {
      setError("Vui lòng nhập đúng link TikTok (https://www.tiktok.com/...)");
      setLoading(false);
      return;
    }
    try {
      const res = await axios.post("/api/tiktok/download", { url });
      if (res.data.videoUrl) {
        setVideoUrl(res.data.videoUrl);
      } else {
        setError(res.data.error || "Không lấy được link video");
      }
    } catch (err) {
      setError(err.response?.data?.error || "Có lỗi xảy ra");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <VStack as="form" spacing={6} onSubmit={handleSubmit} pt={4}>
        <Title text={"Tải video TikTok không logo"} />
        <FormControl isRequired>
          <FormLabel>Nhập link TikTok</FormLabel>
          <HStack
            w="100%"
            align="start"
            spacing={2} //
            flexWrap={{ base: "wrap", sm: "nowrap" }}
          >
            <Input
              placeholder="https://www.tiktok.com/..."
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              isDisabled={loading}
              borderColor="teal.400"
              _focusVisible={{ borderColor: "teal.600", boxShadow: "0 0 0 1px #319795" }}
              bg="white"
              flex={1}
              color={"black"}
            />
            <Button
              type="submit"
              colorScheme="teal"
              isLoading={loading}
              loadingText="Đang xử lý"
              leftIcon={<FiDownload />} //
              minW={{ base: "100%", sm: "auto" }}
              mt={{ base: 2, sm: 0 }}
            >
              Tải về
            </Button>
          </HStack>
        </FormControl>
        {error && (
          <Alert status="error">
            <AlertIcon />
            {error}
          </Alert>
        )}
        {videoUrl && (
          <Box textAlign="center">
            <video
              src={videoUrl}
              controls //
              style={{ maxWidth: "100%", marginBottom: 12 }}
            />
            <Link href={videoUrl} color="teal.500" isExternal download>
              Bấm vào đây để tải video
            </Link>
          </Box>
        )}
      </VStack>
    </>
  );
}
