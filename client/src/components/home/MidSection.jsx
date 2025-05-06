import { styled } from "@mui/material";

const BannerWrapper = styled("div")`
  position: relative;
  width: 100%;
`;

const BottomBanner = styled("img")`
  width: 100%;
  height: auto;
  display: block;
`;

const TextOverlay = styled("div")`
  position: absolute;
  top: 50%;
  right: 10%;
  transform: translateY(-50%);
  color: white;
  text-align: right;
`;

const Heading = styled("h2")`
  font-size: 2rem;
  font-weight: bold;
  margin-right:60px;
  
`;

const SubHeading = styled("p")`
  font-size: 2rem;
  font-weight: bold;
  margin-right: 15px ;
  margin-top:3px;
  
`;

const ShopButton = styled("button")`
  padding: 10px 20px;
  font-size: 2rem;
  border: none;
  background-color: white;
  color: black;
  border-radius: 5px;
  cursor: pointer;
  margin-right:120px;
  margin-top:10px;
`;

const MidSection = () => {
  const url = "https://images.meesho.com/images/marketing/1744698324402.webp";
  return (
    <BannerWrapper>
      <BottomBanner src={url} alt="Sale" />
      <TextOverlay>
        <Heading>Smart Shopping</Heading>
        <SubHeading>Trusted by Millions</SubHeading>
        <ShopButton>Shop Now</ShopButton>
      </TextOverlay>
    </BannerWrapper>
  );
};

export default MidSection;
