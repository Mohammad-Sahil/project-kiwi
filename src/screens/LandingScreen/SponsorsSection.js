import { Box, Container, Grid, Heading, Image, Text } from 'theme-ui';
import theme from '../../lib/theme';
import Feature from '../../components/feature';

const SponsorsSection = () => {
  return (
    <Box
      id="sponsors-section"
      as="section"
      sx={{
        py: [4, 5],
        color: 'white',
        minHeight: '100vh',
        height: 'fit-content',
        backgroundColor: theme.colors.dark,
        // width: '100vw',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }}
    >
      <Container>
        {/* <Text as="p" variant="eyebrow">
          HackNITR
        </Text> */}

        <Heading
          as="h2"
          variant="title"
          sx={{ textAlign: 'center', marginBottom: '1rem' }}
        >
          <Text
            as="span"
            sx={{
              borderRadius: 'default',
              px: 2,
              mx: [-2, 0],
              whiteSpace: 'nowrap',
              color: '#5d114c',
              bg: 'rgb(255, 212, 64)'
            }}
          >
            Sponsors
          </Text>
        </Heading>
        <Grid
          columns={[null, null]}
          gap={[6, 6]}
          sx={{ alignItems: 'center', span: { color: 'white' } }}
        >
          <Image
            src="https://cdn.worldvectorlogo.com/logos/sticker-mule.svg"
            alt="Illustration of Orpheus with a moon"
            sx={{
              maxHeight: '15rem',
              justifySelf: 'center'
            }}
          />
        </Grid>
      </Container>
    </Box>
  );
};

export default SponsorsSection;
