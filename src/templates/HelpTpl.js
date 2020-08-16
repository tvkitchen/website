import React from 'react';
import { Helmet } from 'react-helmet';
import { graphql } from 'gatsby';

import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import makeStyles from '@material-ui/core/styles/makeStyles';

import Layout from '@src/components/Layout';
import config from '@src/config';
import withTheme from '@src/themes/withTheme';

const useStyles = makeStyles(theme => ({
  toolbar: theme.mixins.toolbar,
  head: {
    marginBottom: theme.spacing(6),
    [theme.breakpoints.up('md')]: {
      marginBottom: theme.spacing(12),
    },
  },
  title: {
    marginBottom: theme.spacing(3),
    [theme.breakpoints.up('md')]: {
      marginBottom: theme.spacing(6),
    },
  },
  tile: {
    height: '100%',
    padding: theme.spacing(4),
    position: 'relative',
    [theme.breakpoints.up('md')]: {
      padding: theme.spacing(6),
    },
  },
  tileTitle: {
    marginBottom: theme.spacing(1),
  },
  tileText: {
    marginBottom: theme.spacing(2),
  },
  tileCta: {},
  faq: {
    border: `5px solid ${theme.palette.divider}`,
    marginTop: theme.spacing(8),
    padding: theme.spacing(4),
    [theme.breakpoints.up('md')]: {
      marginTop: theme.spacing(12),
      padding: theme.spacing(12),
    },
  },
}));

const HelpTpl = ({
  data: {
    mdx: { frontmatter },
    faq,
  },
  children,
  ...props
}) => {
  const classes = useStyles();

  console.group('HelpTpl.js');
  console.log({ frontmatter });
  console.log({ faq });
  console.groupEnd();

  return (
    <Layout {...props}>
      <Helmet>
        <title>{frontmatter.title}</title>
      </Helmet>
      <main>
        <Container disableGutters>
          <Container className={classes.head} maxWidth="md">
            <Typography align="center" className={classes.title} variant="h1">
              {frontmatter.head.title}
            </Typography>
            <Typography
              align="center"
              dangerouslySetInnerHTML={{ __html: frontmatter.head.text }}
              variant="h4"
              component="p"
            />
          </Container>

          <Container>
            <Grid container spacing={8} alignContent="stretch">
              <Grid item xs={12} md={4}>
                <Paper className={classes.tile} variant="outlined">
                  <Typography className={classes.tileTitle} variant="h4" component="h3">
                    {frontmatter.slack.title}
                  </Typography>
                  <Typography className={classes.tileText} variant="body1" component="p">
                    {frontmatter.slack.text}
                  </Typography>
                  <Button className={classes.tileCta} variant="contained" color="primary">
                    {frontmatter.slack.cta}
                  </Button>
                </Paper>
              </Grid>
              <Grid item xs={12} md={4}>
                <Paper className={classes.tile} variant="outlined">
                  <Typography className={classes.tileTitle} variant="h4" component="h3">
                    {frontmatter.github.title}
                  </Typography>
                  <Typography className={classes.tileText} variant="body1" component="p">
                    {frontmatter.github.text}
                  </Typography>
                  <Button className={classes.tileCta} variant="contained" color="primary">
                    {frontmatter.github.cta}
                  </Button>
                </Paper>
              </Grid>
              <Grid item xs={12} md={4}>
                <Paper className={classes.tile} variant="outlined">
                  <Typography className={classes.tileTitle} variant="h4" component="h3">
                    {frontmatter.docs.title}
                  </Typography>
                  <Typography className={classes.tileText} variant="body1" component="p">
                    {frontmatter.docs.text}
                  </Typography>
                  <Button className={classes.tileCta} variant="contained" color="primary">
                    {frontmatter.docs.cta}
                  </Button>
                </Paper>
              </Grid>
            </Grid>
          </Container>

          <Container className={classes.head} maxWidth="md">
            <Typography align="center" className={classes.title} variant="h2">
              {frontmatter.faq.title}
            </Typography>
          </Container>
          <Container disableGutters>
            <Grid alignContent="stretch" container spacing={8}>
              {faq.edges.map(({ node }) => {
                const { id, frontmatter, answer } = node;
                const { question } = frontmatter;
                return (
                  <Grid item xs={12} md={6} key={id}>
                    <Typography variant="h5" component="h3">
                      {question}
                    </Typography>
                    <Typography variant="body2" dangerouslySetInnerHTML={{ __html: answer }} />
                  </Grid>
                );
              })}
            </Grid>
          </Container>
        </Container>
      </main>
    </Layout>
  );
};

export default withTheme(HelpTpl, config.sections.help.color);

export const pageQuery = graphql`
  query HelpTplQuery($id: String) {
    mdx(id: { eq: $id }) {
      frontmatter {
        title
        head {
          title
          text
        }
        slack {
          title
          text
          cta
        }
        github {
          title
          text
          cta
        }
        docs {
          title
          text
          cta
        }
        faq {
          title
        }
      }
    }
    faq: allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "content/help/faq/.*.md/" } }
      sort: { fields: [frontmatter___score, wordCount___words], order: [DESC, DESC] }
    ) {
      edges {
        node {
          id
          frontmatter {
            question
          }
          answer: html
        }
      }
    }
  }
`;
