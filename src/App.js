import { Box } from "@chakra-ui/react";
import Content from "./components/content";
import Header from "./components/header";
import Footer from "./components/footer";
export default function App() {
  return (
    <Box>
      <Box pb="40">
        <Header />
      </Box>
      <Box mt={56}>
        <Content />
      </Box>
      <Box>
        <Footer />
      </Box>
    </Box>
  );
}
