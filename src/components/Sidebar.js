import { Box, VStack, Accordion, AccordionItem, AccordionButton, AccordionPanel, AccordionIcon, Link as ChakraLink, Divider } from "@chakra-ui/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Logo from "./Logo";
import { SiTiktok } from "react-icons/si";
import { PiWechatLogoFill, PiDownload } from "react-icons/pi";
import { FaFacebook } from "react-icons/fa";

const sidebarItems = [
  {
    label: "TikTok",
    icon: SiTiktok,
    links: [
      {
        href: "/tiktok/download", //
        label: "Tải video",
        icon: PiDownload,
      },
    ],
  },
  {
    label: "Xiaohongshu",
    icon: PiWechatLogoFill,
    links: [
      {
        href: "/xiaohongshu",
        label: "Tải video ",
        icon: PiDownload,
      },
    ],
  },
  {
    label: "Facebook",
    icon: FaFacebook,
    links: [
      {
        href: "/facebook", //
        label: "Tải video ",
        icon: PiDownload,
      },
    ],
  },
];

export default function Sidebar({ isMobile }) {
  const pathname = usePathname();
  return (
    <Box
      minW="220px"
      maxW="220px" //
      display={isMobile ? undefined : { base: "none", md: "block" }}
    >
      {isMobile && (
        <>
          <Logo />
          <Divider my={4} />
        </>
      )}
      <Accordion allowMultiple defaultIndex={[0]}>
        {sidebarItems.map((cat) => (
          <AccordionItem key={cat.label} border="none">
            <AccordionButton px={0}>
              <Box as="span" flex="1" textAlign="left" fontWeight="bold" display="flex" alignItems="center" gap={2}>
                <Box as={cat.icon} fontSize="lg" />
                {cat.label}
              </Box>
              <AccordionIcon />
            </AccordionButton>
            <AccordionPanel>
              <VStack align="start" spacing={1} pl={4}>
                {cat.links.map((item) => {
                  const isActive = pathname === item.href;
                  return (
                    <ChakraLink
                      as={Link} //
                      key={item.href}
                      href={item.href}
                      fontWeight="semibold"
                      color={isActive ? "teal.600" : "teal.400"}
                      display="flex"
                      alignItems="center"
                      gap={2}
                    >
                      <Box as={item.icon} fontSize="md" />
                      <span> {item.label}</span>
                    </ChakraLink>
                  );
                })}
              </VStack>
            </AccordionPanel>
          </AccordionItem>
        ))}
      </Accordion>
    </Box>
  );
}
