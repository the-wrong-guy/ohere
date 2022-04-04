import { useState, useEffect } from "react";
import {
  Button,
  Drawer,
  IconButton,
  useTheme,
  useMediaQuery,
  Dialog,
  CardActionArea,
  Grid,
} from "@mui/material";

export default function Header() {
  const matches = useMediaQuery("(max-width:1023px)");
  const [isConnectDialogOpen, setConnectDialogOpen] = useState(false);
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const imgSize = matches ? "80px" : "100px";
  const menus = [
    { href: "#hero", name: "App" },
    { href: "#the-project", name: "The Project" },
    {
      href: "https://docs.google.com/document/d/1Sk2OrtdBYLBS9YCpz20DrGJZX81cxZMUkne7Oz8hDqM/edit",
      name: "Whitepages",
      target: "_blank",
    },
    { href: "#faq", name: "F.A.Q." },
    { href: "#contact", name: "Contact" },
  ];

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setMobileMenuOpen(open);
  };

  const handleClose = () => {
    setConnectDialogOpen(false);
  };

  return (
    <>
      <Drawer
        anchor={"left"}
        open={isMobileMenuOpen}
        onClose={toggleDrawer(false)}
        PaperProps={{ style: { width: "80vw", padding: "10px 15px" } }}
        transitionDuration={300}
      >
        <div className='flex items-center gap-10'>
          <IconButton onClick={toggleDrawer(false)}>
            <img
              src='https://s2.svgbox.net/materialui.svg?ic=close&color=000'
              width='32'
              height='32'
              alt='close'
            />
          </IconButton>
          <img
            src={require("../images/ohare.png")}
            alt='ohare'
            style={{ width: imgSize, height: imgSize, zIndex: 10200 }}
          />
        </div>
        <div className='flex flex-col justify-center items-center gap-4 mt-5'>
          {menus.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className='font-semibold text-dark text-xl hover:text-accent transition-all'
              target={item?.target}
              onClick={toggleDrawer(false)}
            >
              {item.name}
            </a>
          ))}
        </div>
      </Drawer>
      <Dialog
        open={isConnectDialogOpen}
        onClose={handleClose}
        fullWidth
        maxWidth={"xs"}
        PaperProps={{
          style: { padding: "17px 20px", borderRadius: "15px" },
          elevation: 5,
        }}
      >
        <div className='flex justify-between items-center mb-3'>
          <p className='font-semibold text-base'>Connect Wallet</p>
          <IconButton onClick={handleClose}>
            <img
              src='https://s2.svgbox.net/materialui.svg?ic=close&color=000'
              width='32'
              height='32'
              alt='close'
            />
          </IconButton>
        </div>
        <Grid container spacing={3}>
          <Grid item xs={6}>
            <CardActionArea
              className='!rounded-xl !flex !justify-center !py-4'
              style={{ border: "1px solid #d1d1d1" }}
            >
              <img
                src={require("../images/metamask.png")}
                alt='metamask'
                className='h-[100px] w-[100px]'
              />
            </CardActionArea>
          </Grid>
          <Grid item xs={6}>
            <CardActionArea
              className='!rounded-xl !flex !justify-center !py-4'
              style={{ border: "1px solid #d1d1d1" }}
            >
              <img
                src={require("../images/walletconnect.png")}
                alt='walletconnect'
                className='h-[100px] w-[100px]'
              />
            </CardActionArea>
          </Grid>
        </Grid>
      </Dialog>
      <div
        className={`flex items-center justify-between px-20 sm:px-5 sticky top-0 bg-[rgba(255,255,255,.5)] z-[1000]`}
      >
        <div className='flex'>
          {matches && (
            <IconButton onClick={toggleDrawer(true)}>
              <img
                src={`https://s2.svgbox.net/hero-solid.svg?ic=menu&color=000`}
                width='32'
                height='32'
                alt='menu'
              />
            </IconButton>
          )}
          <img
            src={require("../images/ohare.png")}
            alt='ohare'
            style={{ width: imgSize, height: imgSize }}
          />
        </div>

        <div className='flex gap-7 lg:hidden flex-wrap justify-center'>
          {menus.map((menu) => (
            <a
              key={menu.href}
              href={menu.href}
              target={menu.target}
              className='font-semibold text-white text-xl hover:text-accent transition-all'
            >
              {menu.name}
            </a>
          ))}
        </div>
        <div className='flex gap-3'>
          <Button className='!bg-white !rounded-full !normal-case !font-semibold !h-[40px] sm:!min-w-none sm:!px-3 !px-10  !text-accent'>
            Approve
          </Button>
          <Button
            className='!bg-white !rounded-full !normal-case !font-semibold !h-[40px] sm:!min-w-none sm:!px-3 !px-10  !text-accent'
            onClick={() => setConnectDialogOpen(true)}
          >
            Connect
          </Button>
        </div>
      </div>
    </>
  );
}
