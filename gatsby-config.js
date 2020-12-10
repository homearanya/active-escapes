/* eslint @typescript-eslint/camelcase: 0 */
require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
})
module.exports = {
  siteMetadata: {
    title: `Active Escapes`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `@carloswebdev`,
    googlePlaceId: process.env.GOOGLE_APIKEY,
    emailAddress: 'tours@active-escapes.co.za',
    siteUrl: 'http://www.active-escapes.co.za/',
    siteMenu: {
      menuItems: [
        { id: '1', name: 'home', link: '/' },
        {
          name: 'About',
          link: null,
          menuItems: [
            { id: '11', name: 'The Company', link: '/about/' },
            { id: '12', name: 'Trail Grading', link: '/trail-grading/' },
            { id: '13', name: 'FAQs', link: '/faqs/' },
          ],
        },
        {
          id: '2',
          name: 'Destinations',
          link: null,
          menuItems: [
            {
              id: '21',
              name: 'Drakensberg',
              link: '/destination/drakensberg/',
            },
            {
              id: '22',
              name: 'Eastern Cape',
              link: '/destination/easterncape/',
            },
            { id: '23', name: 'Free State', link: '/destination/freestate/' },
            { id: '24', name: 'Kosi Bay', link: '/destination/kosibay/' },
            {
              id: '25',
              name: 'KZN Interior',
              link: '/destination/kzn_interior/',
            },
            {
              id: '26',
              name: 'KZN Midlands',
              link: '/destination/kzn_midlands/',
            },
            {
              id: '27',
              name: 'Western Cape',
              link: '/destination/westerncape/',
            },
            { id: '28', name: 'Wild Coast', link: '/destination/wildcoast/' },
            {
              id: '29',
              name: 'Southern Africa',
              link: '/destination/southernafrica/',
            },
          ],
        },
        {
          id: '3',
          name: 'Activities',
          link: null,
          megaMenu: true,
          menuItems: [
            {
              id: '31',
              name: 'Hiking / Slackpacking',
              link: '/activity/hiking/',
              img: 'hiking',
              blurb:
                'South Africa has a vast range of mountains, forests and coastline, which hold incredible hiking, trekking and backpacking opportunity.',
            },
            {
              id: '32',
              name: 'Mountain Biking',
              link: '/activity/mountainbiking/',
              img: 'cycling',
              blurb:
                "Whether you're looking for adrenalin-pumping downhill, flowing single-track or tranquil country road riding, Active Escapes has a tour to get your wheels rolling.",
            },
            {
              id: '33',
              name: 'Retreats',
              link: '/activity/retreats/',
              img: 'retreats',
              blurb:
                'Looking for a getaway with real connection? Feet on the ground, head to the sky, and quieten your mind on a Nature – Yoga – Mindfulness retreat.',
            },
            {
              id: '34',
              name: 'Nature',
              link: '/activity/nature/',
              img: 'nature',
              blurb:
                '“Look into nature, and then you will be able to understand everything better.”  Albert Einstein. Nature is not just a place to visit. It is home.',
            },
            {
              id: '35',
              name: 'Family',
              link: '/activity/family/',
              img: 'family',
              blurb:
                "Roasting marshmallows around a campfire or hiking to a cave; bonding over an adventure - that’s what an Active Escape's family holiday package is all about.",
            },
            {
              id: '36',
              name: 'Groups',
              link: '/activity/groups/',
              img: 'groups',
              blurb:
                'Friends united or the extended family-gathering, with occasion for uninterrupted connection and/or space – many of our trips and destinations provide the perfect opportunity for both.',
            },

            {
              id: '37',
              name: 'Rafting',
              link: '/activity/rafting/',
              img: 'rafting',
              blurb:
                '“When you put your hand in a flowing stream, you touch the last that has gone before and the first of what is still to come" Leonardo DaVinci. Come take on the white water of the Tugela & Umkomaas.',
            },

            {
              id: '38',
              name: 'Running',
              link: '/activity/running/',
              img: 'running',
              blurb:
                'Most of our hiking trails can be taken on at a jog. We can combine hike days to make more of the mileages and with luggage transfers to the next lodge, you can run wild and free. ',
            },
          ],
        },
        { id: '4', name: 'Blog', link: '/blog/' },
        { id: '5', name: 'Contact', link: '/contact-us/' },
      ],
    },
    footerMenu: {
      menuItems: [
        {
          id: '1',
          heading: 'About',
          menuItems: [
            { id: '11', name: 'The Company', link: '/about/' },
            { id: '12', name: 'Trail Grading', link: '/trail-grading/' },
            { id: '13', name: 'FAQs', link: '/faqs/' },
          ],
        },
        {
          id: '2',
          heading: 'Top Destinations',
          menuItems: [
            { id: '21', name: 'Wild Coast', link: '/destination/wildcoast/' },
            {
              id: '22',
              name: 'Drakensberg',
              link: '/destination/drakensberg/',
            },
            { id: '23', name: 'Kosi Bay', link: '/destination/kosibay/' },
          ],
        },
        {
          id: '3',
          heading: 'Top Activities',
          menuItems: [
            { id: '31', name: 'Hiking', link: '/activity/hiking/' },
            { id: '32', name: 'Biking', link: '/activity/mountainbiking/' },
            { id: '33', name: 'Rafting', link: '/activity/rafting/' },
          ],
        },
        {
          id: '4',
          heading: 'Reservations',
          menuItems: [
            {
              id: '41',
              name: 'Terms & Conditions',
              link: '/terms-and-conditions/',
            },
            {
              id: '42',
              name: 'Tour Enquiry',
              link: '/contact-us/#tour-enquiry',
            },
          ],
        },
        {
          id: '5',
          heading: 'Contact Us',
          menuItems: [
            {
              id: '51',
              iconClassName: 'icon-tel',
              name: '+27 (0)33 329 5259',
              link: 'tel:+27333295259',
            },
            {
              id: '52',
              iconClassName: 'icon-email',
              name: 'tours@active-escapes.co.za',
              link: 'mailto:tours@active-escapes.co.za',
            },
            {
              id: '53',
              iconClassName: 'icon-home',
              name: 'Hilton, KwaZulu-Natal, SA',
              link: 'https://goo.gl/maps/WZhx6jMbd94mLVXx9',
            },
          ],
        },
      ],
    },
  },
  plugins: [
    // {
    //   resolve: 'gatsby-plugin-htaccess',
    //   options: {
    //     RewriteBase: true,
    //     https: true,
    //     www: true,
    //     SymLinksIfOwnerMatch: true,
    //     host: 'www.active-escapes.co.za', // if 'www' is set to 'false', be sure to also remove it here!
    //     ErrorDocument: `
    //       ErrorDocument 404 /error_pages/404.html
    //     `,
    //     redirect: [
    //       'RewriteRule ^not-existing-url/?$ /existing-url [R=301,L,NE]'
    //     ],
    //   },
    // },
    `gatsby-plugin-sass`,
    `gatsby-plugin-typescript`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /\.inline.svg$/,
        },
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `img`,
        path: `${__dirname}/src/img/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: `${__dirname}/src/data/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages/`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 1440,
              quality: 90,
              withWebp: true,
            },
          },
          `gatsby-remark-copy-linked-files`,
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#00b7b0`,
        theme_color: `#ff6d2e`,
        display: `minimal-ui`,
        icon: `src/images/logo.svg`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-source-google-places`,
      options: {
        placeIds: [process.env.GOOGLE_PLACE_ID],
        apiKey: process.env.GOOGLE_APIKEY,
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    `gatsby-plugin-offline`,
  ],
  mapping: {
    'MarkdownRemark.frontmatter.destination': `MarkdownRemark.frontmatter.code`,
    'MarkdownRemark.frontmatter.activity.name': `MarkdownRemark.frontmatter.code`,
    'MarkdownRemark.frontmatter.subActivity': `MarkdownRemark.frontmatter.code`,
    'MarkdownRemark.frontmatter.difficultyLevel': `MarkdownRemark.frontmatter.code`,
    'MarkdownRemark.frontmatter.images.tour': `MarkdownRemark.frontmatter.slug`,
    'MarkdownRemark.frontmatter.byDestinationSection.destinations.destination': `MarkdownRemark.frontmatter.code`,
  },
}
