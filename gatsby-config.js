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
    siteUrl: 'http://active-escapes.co.za/',
    siteMenu: {
      menuItems: [
        { name: 'home', link: '/' },
        {
          name: 'About',
          link: null,
          menuItems: [
            { name: 'The Company', link: '/about/' },
            { name: 'Trail Grading', link: '/trail-grading/' },
            { name: 'FAQs', link: '/faqs/' },
          ],
        },
        {
          name: 'Destinations',
          link: null,
          menuItems: [
            { name: 'Drakensberg', link: '/destination/drakensberg/' },
            { name: 'EC Highlands', link: '/destination/ec_highlands/' },
            { name: 'Free State', link: '/destination/freestate/' },
            { name: 'Kosi Bay', link: '/destination/kosibay/' },
            { name: 'KZN Interior', link: '/destination/kzn_interior/' },
            { name: 'KZN Midlands', link: '/destination/kzn_midlands/' },
            { name: 'Western Cape', link: '/destination/westerncape/' },
            { name: 'Wild Coast', link: '/destination/wildcoast/' },
            { name: 'Southern Africa', link: '/destination/southernafrica/' },
          ],
        },
        {
          name: 'Activities',
          link: null,
          megaMenu: true,
          menuItems: [
            {
              name: 'Hiking / Slackpacking',
              link: '/activity/hiking/',
              img: 'hiking',
              blurb:
                'South Africa has a vast range of mountains, forests and coastline, which hold incredible hiking, trekking and backpacking opportunity.',
            },
            {
              name: 'Mountain Biking',
              link: '/activity/mountainbiking/',
              img: 'cycling',
              blurb:
                "Whether you're looking for adrenalin-pumping downhill, flowing single-track or tranquil country road riding, Active Escapes has a tour to get your wheels rolling.",
            },
            {
              name: 'Horse Riding',
              link: '/activity/horseriding/',
              img: 'horseriding',
              blurb:
                'Forging streams, galloping plains or cantering up golden miles of beach, we have multi-day riding adventures in the berg and coast.',
            },
            {
              name: 'Nature',
              link: '/activity/nature/',
              img: 'nature',
              blurb:
                '“Look into nature, and then you will be able to understand everything better.”  Albert Einstein. Nature is not just a place to visit. It is home.',
            },
            {
              name: 'Family',
              link: '/activity/family/',
              img: 'family',
              blurb:
                "Roasting marshmallows around a campfire or hiking to a cave; bonding over an adventure - that’s what an Active Escape's family holiday package is all about.",
            },

            {
              name: 'Groups',
              link: '/activity/groups/',
              img: 'groups',
              blurb:
                'Friends united or the extended family-gathering, with occasion for uninterrupted connection and/or space – many of our trips and destinations provide the perfect opportunity for both.',
            },

            {
              name: 'Rafting',
              link: '/activity/rafting/',
              img: 'rafting',
              blurb:
                '“When you put your hand in a flowing stream, you touch the last that has gone before and the first of what is still to come" Leonardo DaVinci. Come take on the white water of the Tugela & Umkomaas.',
            },

            {
              name: 'Running',
              link: '/activity/running/',
              img: 'running',
              blurb:
                'Most of our hiking trails can be taken on at a jog. We can combine hike days to make more of the mileages and with luggage transfers to the next lodge, you can run wild and free. ',
            },
          ],
        },
        {
          name: 'Galleries',
          link: null,
          menuItems: [
            { name: 'Adventure', link: '/gallery/adventure/' },
            { name: 'Mountain Hikes', link: '/gallery/mountainhikes/' },
            { name: 'Coastal Hikes', link: '/gallery/coastalhikes/' },
            { name: 'Friends & Family', link: '/gallery/friendsfamily/' },
            { name: 'Mountain Biking', link: '/gallery/mountainbiking/' },
          ],
        },
        { name: 'Blog', link: '/blog/' },
        { name: 'Contact', link: '/contact-us/' },
      ],
    },
    footerMenu: {
      menuItems: [
        {
          heading: 'About',
          menuItems: [
            { name: 'The Company', link: '/about/' },
            { name: 'Trail Grading', link: '/trail-grading/' },
            { name: 'FAQs', link: '/faqs/' },
          ],
        },
        {
          heading: 'Top Destinations',
          menuItems: [
            { name: 'Wild Coast', link: '/destination/wildcoast/' },
            { name: 'Drakensberg', link: '/destination/drakensberg/' },
            { name: 'Kosi Bay', link: '/destination/kosibay/' },
          ],
        },
        {
          heading: 'Top Activities',
          menuItems: [
            { name: 'Hiking', link: '/activity/hiking/' },
            { name: 'Biking', link: '/activity/mountainbiking/' },
            { name: 'Rafting', link: '/activity/rafting/' },
          ],
        },
        {
          heading: 'Reservations',
          menuItems: [
            {
              name: 'Terms & Conditions',
              link: '/terms-and-conditions/',
            },
            { name: 'Tour Enquiry', link: '/contact-us/#tour-enquiry' },
          ],
        },
        {
          heading: 'Contact Us',
          menuItems: [
            {
              iconClassName: 'icon-tel',
              name: '+27 (0)33 329 5259',
              link: 'tel:+27333295259',
            },
            {
              iconClassName: 'icon-email',
              name: 'tours@active-escapes.co.za',
              link: 'mailto:tours@active-escapes.co.za',
            },
            {
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
    // `gatsby-plugin-offline`,
  ],
  mapping: {
    'MarkdownRemark.frontmatter.destination': `MarkdownRemark.frontmatter.code`,
    'MarkdownRemark.frontmatter.activity': `MarkdownRemark.frontmatter.code`,
    'MarkdownRemark.frontmatter.difficultyLevel': `MarkdownRemark.frontmatter.code`,
    'MarkdownRemark.frontmatter.subActivity': `MarkdownRemark.frontmatter.code`,
    'MarkdownRemark.frontmatter.images.tour': `MarkdownRemark.frontmatter.slug`,
  },
}
