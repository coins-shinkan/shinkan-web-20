const path = require("path");

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;
  const blogPostTemplate = path.resolve(`src/templates/events.js`);
  return graphql(`
    query {
      allMarkdownRemark(sort: { order: ASC, fields: [frontmatter___date] }) {
        edges {
          node {
            frontmatter {
              path
            }
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      throw result.errors;
    }

    result.data.allMarkdownRemark.edges.forEach(edge => {
      createPage({
        path: `${edge.node.frontmatter.path}`,
        component: blogPostTemplate,
        context: {}
      });
    });
  });
};
