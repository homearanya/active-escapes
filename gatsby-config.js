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
    siteMenu: {
      menuItems: [
        { name: 'home', link: '/' },
        {
          name: 'About',
          link: null,
          menuItems: [
            { name: 'Our Ethos', link: '/about-us/our-ethos/' },
            { name: 'Trail Grading', link: '/about-us/trail-grading/' },
            { name: 'FAQs', link: '/about-us/faqs/' },
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
          menuItems: [
            { name: 'Hiking / Slackpacking', link: '/activity/hiking/' },
            { name: 'Mountain Biking', link: '/activity/mountainbiking/' },
            { name: 'Horse Riding', link: '/activity/horseriding/' },
            { name: 'Nature', link: '/activity/nature/' },
            { name: 'Family', link: '/activity/family/' },
            { name: 'Groups', link: '/activity/groups/' },
            { name: 'Rafting', link: '/activity/rafting/' },
            { name: 'Running', link: '/activity/running/' },
          ],
        },
        {
          name: 'Galleries',
          link: null,
          menuItems: [
            { name: 'Adventure', link: '/gallery/adventure/' },
            { name: 'Mountain Hikes', link: '/gallery/mountainhikes/' },
            { name: 'Coastal Hikes', link: '/gallery/coastalhikes/' },
            { name: 'Friends & Family', link: '/gallery/friendsfamilies/' },
            { name: 'Mountain Biking', link: '/gallery/mountainbiking/' },
          ],
        },
        { name: 'Blog', link: '/blog/' },
        { name: 'Contact', link: '/contact/' },
      ],
    },
    footerMenu: {
      menuItems: [
        {
          heading: 'About Us',
          menuItems: [
            { name: 'The company', link: '/about-us/the-company/' },
            { name: 'Our Ethos', link: '/about-us/our-ethos/' },
            { name: 'Our Guides', link: '/about-us/our-guides/' },
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
            { name: 'Adventure', link: '/activity/adventure/' },
          ],
        },
        {
          heading: 'Reservations',
          menuItems: [
            {
              name: 'Terms and Conditions',
              link: '/activity/terms-and-conditions/',
            },
            { name: 'Tour Entquiry', link: '/contact' },
          ],
        },
        {
          heading: 'Ask Us',
          menuItems: [
            { name: 'Trail Grading', link: '/about-us/trail-grading/' },
            { name: 'FAQs', link: '/about-us/faqs/' },
            { name: 'Safety', link: '/about-us/safety/' },
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
          include: /\.inline\.svg$/,
        },
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `img`,
        path: `${__dirname}/src/img`,
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
}
