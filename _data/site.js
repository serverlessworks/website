module.exports = {
  meta: {
    title: "ServerlessWorks",
    description: "All about serverless technology.",
    lang: "en",
    siteUrl: "https://serverless.works",
  },
  feed: { // used in feed.xml.njk
    subtitle: "Lorem ipsum dolor sit amet consecuteor",
    filename: "atom.xml",
    path: "/atom.xml",
    id: "https://serverless.works/",
    authorName: "John Doe",
    authorEmail: "hello@serverless.works"
  },
  hero: { // used in hero section of main page ie. index.html.njk
    title: "ServerlessWorks",
    description: "We are AWS Serverless Specialists"
  }
}