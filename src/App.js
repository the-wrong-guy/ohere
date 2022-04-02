import {
  Container,
  Button,
  Grid,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import Header from "./components/Header";
import TextField from "./components/TextField";

const DetailsCard = ({ header, desc }) => (
  <div className='flex flex-col gap-y-5 justify-center flex-1'>
    <p className='text-[60px] text-accent text-center'>{header}</p>
    <p className=' text-white text-center text-sm'>{desc}</p>
  </div>
);

function App() {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("sm"));

  const details = [
    { header: "451", desc: "Times Page Bookmarked This Week" },
    { header: "16", desc: "Total Angel Investors" },
    { header: "2022", desc: "Founded in" },
    { header: "65", desc: "Countries World Wide" },
    { header: "∞", desc: "Potential" },
  ];
  const textFields = ["FirstName", "LastName", "Email"];

  return (
    <div>
      <Header />
      <section id='hero' className='bg-gradient w-full'>
        <Container>
          <div className='px-[100px] flex items-center justify-around py-[100px] sm:flex-col sm:px-5'>
            <p
              style={{
                textShadow:
                  "rgb(10 189 240 / 30%) 3px 3px 0px, rgb(254 1 1 / 30%) -3px -3px 0px",
              }}
              className='text-dark text-[80px] font-bold text-center'
            >
              The O'Hare <br /> Project
            </p>
            <div className='grid gap-5 sm:pt-12'>
              <Button
                className='!bg-[#141416]  !border-accent !text-accent !normal-case sm:!text-2xl sm:!px-14 sm:!py-2'
                style={{ border: "2px solid" }}
              >
                Roadmap
              </Button>
              <Button
                className='!bg-[#141416]  !border-accent !text-accent !normal-case sm:!text-2xl sm:!px-14 sm:!py-2'
                style={{ border: "2px solid" }}
              >
                Launch App
              </Button>
            </div>
          </div>
        </Container>
      </section>
      <section id='countdown' className='bg-dark'>
        <Container className='flex flex-col gap-y-[100px] py-5'>
          <p className='text-[30px] text-accent text-center'>
            Countdown to Pre-Launch
          </p>
          <div className='flex items-center justify-center gap-[40px] flex-wrap pt-12'>
            {details.map((detail) => (
              <DetailsCard
                key={detail.header}
                header={detail.header}
                desc={detail.desc}
              />
            ))}
          </div>
        </Container>
      </section>
      <section id='the-project'>
        <Container className='flex justify-center py-8'>
          <p className='text-[60px] text-white font-bold text-center mb-12'>
            The Project
          </p>
          <Grid container spacing={10}>
            <Grid item md={6} xs={12} className='grid gap-5'>
              <p className='text-xl font-normal text-white text-center'>
                Our project is based on a phenomenon that was made popular in
                the 80's during the massive Hedge Fund expansion of the time.
              </p>
              <p className='text-xl font-normal text-white text-center'>
                Traders would deploy a leveraged bet on a commodity, then head
                to the Chicago, O'Hare International Airport.
              </p>
              <p className='text-xl font-normal text-white text-center'>
                If the bet won, they were set for decades. If not, they bought a
                one-way ticket to start a new life.
              </p>
            </Grid>
            <Grid item md={6} xs={12} className='grid gap-5'>
              <p className='text-xl font-normal text-white text-center'>
                Luckily, in the world of cryptocurrency regulations we live in,
                combined with the beauty of mathematics, we are able to mitigate
                the risks of this play while still achieving similar results
                through the use of this investment strategy.
              </p>
              <p className='text-xl font-normal text-white text-center'>
                See whitepages for more.
              </p>
            </Grid>
          </Grid>
        </Container>
      </section>
      <section id='faq'>
        <Container className='flex justify-center py-8'>
          <p className='text-[60px] text-white font-bold text-center mb-12'>
            F.A.Q.
          </p>
          <Grid container spacing={10}>
            <Grid item md={6} xs={12} className='grid gap-5'>
              <p className='text-[30px] font-normal text-white text-center'>
                How do wins/loses effect the P/L?
              </p>
              <p className='text-xl font-normal text-white text-center'>
                If a voted upon play pays off, the treasury profits will be used
                in the strategical appreciation of our token immediately. If the
                play does not, we will always keep a base amount in the OIF to
                maintain coin value.
              </p>
            </Grid>
            <Grid item md={6} xs={12} className='grid gap-5'>
              <p className='text-[30px] font-normal text-white text-center'>
                How can I participate?
              </p>
              <p className='text-xl font-normal text-white text-center'>
                Signing our contract will allow you to contribute on the bets
                taken, as well as profit from winning investments.
              </p>
            </Grid>
            <Grid item md={6} xs={12} className='grid gap-5'>
              <p className='text-[30px] font-normal text-white text-center'>
                How do I know this is a legitimate project?
              </p>
              <p className='text-xl font-normal text-white text-center'>
                Our team is comprised of KYC'd individuals and for guaranteed
                security. While rug pulls do exist in the crypto world, a
                sustainable business model is much more valuable in this
                developing crypto market.
              </p>
            </Grid>
            <Grid item md={6} xs={12} className='grid gap-5'>
              <p className='text-[30px] font-normal text-white text-center'>
                Who is behind this project?
              </p>
              <p className='text-xl font-normal text-white text-center'>
                The OP Team is comprised of group of 3 developers, 2 marketers,
                and our CEO. Our team has already been KYC approved and will
                expand further in the Whitepages for added transparency. Also
                note that all new members will be KYC'd when we expand our team.
              </p>
            </Grid>
          </Grid>
        </Container>
      </section>
      <section id='contact'>
        <Container className='pb-5 pt-10 !flex flex-col gap-8'>
          <p className='text-bold text-white text-center text-[30px] '>
            Any other questions?
          </p>
          <Grid
            container
            justifyContent={"center"}
            columnSpacing={10}
            rowSpacing={matches ? 1 : 5}
          >
            {textFields.map((item) => (
              <Grid item xs={12} md={4}>
                <TextField label={item} />
              </Grid>
            ))}
            <Grid item xs={12} md={12}>
              <TextField label={"Write a message"} textarea />
            </Grid>
            <Grid item xs={6} md={3} className='sm:pt-4'>
              <Button className='!bg-[#373B4D]  !border-accent !text-white !normal-case !min-w-full'>
                Submit
              </Button>
            </Grid>
          </Grid>
        </Container>
      </section>

      <p className='text-xl text-white text-center mt-7 mb-5'>
        O'Hare Project &copy; Copyright {new Date().getFullYear()}
      </p>
    </div>
  );
}

export default App;
